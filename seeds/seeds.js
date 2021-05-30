const sequelize = require('../config/connection');
const {Comments, Post, CreatUser} = require('../models')

const commentsData = require('./commentSeed');
const postData = require('./postSeed') ;
const userData = require('./userDataSeed');


const SeedDatabase = async () => {
    await sequelize.sync({force: true});

    const user = await CreatUser.bulkCreate(userData,{
        individualHooks: true,
    })
    //
    for(const post of postData){
        await Post.create({
            ...post,
            user_id: user[Math.floor(Math.random() * user.length)].id,
        });
    }

    await Comments.bulkCreate(commentsData)
    process.exit(0)


}

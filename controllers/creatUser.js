const  { user } = require('../../models/user');
const router = require("express").Router();

router.POST("/", async (req, res) => {

    try{
        const newUSer = await user.create( req.body)
        req.session.save(() => {
            req.session.userId = newUSer.id;
            req.session.firstName = newUSer.firstName;
            //last name
            req.session.loggedIn = true;


        })

    } catch (err) {
        console.log(err)
    }
})
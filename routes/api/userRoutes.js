const router = require("express").Router();
const apiRoutes = require('./api');


router.use('/api', apiRoutes);

router.get('/', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    res.render("login")
})

router.get('/signup', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    res.render("signup")
})

router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    res.render("login")
})

module.exports = router; 
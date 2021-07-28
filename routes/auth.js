const router = require('express').Router();
const User = require('../model/User');

//post register
router.post('/register', (req, res) => {
    // res.send('register');
    const user = new User({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    })
});

//post login
router.post('/login', (req, res) => {
    res.send('login');
});

module.exports = router;
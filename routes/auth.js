const router = require('express').Router();
const User = require('../model/User');

//post register
router.post('/register', async (req, res) => {
    // res.send('register');
    const user = new User({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    })
    try {
      const  SavedUser = await user.save(); 
      res.json(SavedUser);
    } 
    catch (err) {
        res.status(400).send(err);
    }
});

//post login
router.post('/login', (req, res) => {
    res.send('login');
});

module.exports = router;
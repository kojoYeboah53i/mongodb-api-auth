const router = require('express').Router();
const User = require('../model/User');
const { registerValidation } = require('../validation.js'); 




//post register
router.post('/register', async (req, res) => {

    // validate user
    // const { error }  = Joi.validate(req.body, schema);
    const { error } = registerValidation(req.body);
    if(error) return  res.status(400).send(error.details[0].message);

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

//ways to make money with code
//https://www.youtube.com/watch?v=dRHsg6hWcNo
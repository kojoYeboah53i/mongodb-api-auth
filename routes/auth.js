const router = require('express').Router();
const User = require('../model/User');
const { registerValidation, loginValidation } = require('../validation.js'); 
const bcrypt = require('bcryptjs') 




//post register
router.post('/register', async (req, res) => {

    //## validate user
    // const { error }  = Joi.validate(req.body, schema);
    const { error } = registerValidation(req.body);
    if(error) return  res.status(400).send(error.details[0].message);

    //check if user already exists
    const EmailExist = await User.findOne({ email: req.body.email });
    if(EmailExist) return res.status(400).send('Email already exists');

    // hashed password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name : req.body.name,
        email : req.body.email,
        password : hashPassword
    })
    try {
      const  SavedUser = await user.save(); 
    //   res.json(SavedUser);
         res.send({user : user.id }); //don't return user object just id
    } 
    catch (err) {
        res.status(400).send(err);
    }
});

//post login
router.post('/login',  async (req, res) => {

     //## validate user
    const { error } = loginValidation(req.body);
    if(error) return  res.status(400).send(error.details[0].message);

       //check if user exists
       const user = await User.findOne({ email: req.body.email });
       if(!user) return res.status(400).send('Email not found');

       //check if password is correct
       const validPass = await bcrypt.compare(req.body.password, user.password);
       if(!validPass) return res.status(400).send('Password is incorrect');
      
       res.send('login successful...');
});

module.exports = router;

//ways to make money with code
//https://www.youtube.com/watch?v=dRHsg6hWcNo
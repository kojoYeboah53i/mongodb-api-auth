const router = require('express').Router();

//post register
router.post('/register', (req, res) => {
    res.send('register');
});

//post login
router.post('/login', (req, res) => {
    res.send('login');
});

module.exports = router;
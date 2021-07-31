const router = require('express').Router();
const verify = require('./verifyToken');

//post routes
router.get('/', verify, (req, res) => {
    res.json({ posts: {title: 'Posts',
     description: 'Welcome to the Posts API cant visit this page without login in' } });

});


module.exports = router;

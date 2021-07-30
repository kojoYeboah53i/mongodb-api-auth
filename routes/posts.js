const router = require('express').Router();

//post routes
router.get('/', (req, res) => {
    res.json({ posts: {title: 'Posts',
     description: 'Welcome to the Posts API cant visit this page without login in' } });

});


module.exports = router;

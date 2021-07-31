const jwt = require('jsonwebtoken');

//verify middlware
module.exports = function (req, res, next) {
const token = req.header('auth-token');
    
 if(!token) return res.status(401).send('Access Denied')

        try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user= verified;
        next();
        } catch(err){
            res.status(401).send('Invalid Token');

        }

} 
    /* another way of verifying jwt*/
// if (token) {
// const decoded = jwt.verify(token, process.env.JWT_SECRET);
// req.decoded = decoded;
// next();
// }

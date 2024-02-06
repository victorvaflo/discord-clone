const jwt = require('jsonwebtoken');
const { model } = require('mongoose');

const config = process.env;

const verifyToken = (req, res, next)=>{
    let token = req.body.token || req.query.token || req.headers['authorization'] ;

    if(!token){
        return res.status(403).send('the token is required for authentification');
    }

    try {
        token = token.replace(/^Bearer\s+/,"");
        const decoded = jwt.verify(token,config.TOKEN_KEY);
        req.user = decoded;
    } catch (error) {
        return res.status(403).send('the token is invalid');
    }

    return next();
};

module.exports = verifyToken;
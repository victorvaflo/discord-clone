const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
// const user = require('../../models/user');

const postLogin = async (req,res)=>{
    try {
        
        const {email, passWord } = req.body;

        const user =  await User.findOne({email: email.toLowerCase()});

        if(user && (await bcrypt.compare(passWord,user.passWord))){
            //send token
            const token = jwt.sign(
                {
                    userId: user._id,
                    email
                },
                process.env.TOKEN_KEY,
                {
                    expiresIn:'24h'
                }
            );

            return res.status(200).json({
                userDetails:{
                    email: user.email,
                    userName: user.userName,
                    token: token,
                },
            })
        }

        return res.status(400).send('Invalid credentials.')

    } catch (err) {
        return res.status(500).send("Error occured. Please try again.")
    }
};

module.exports = postLogin;
const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const postRegister = async (req,res)=>{
    try {
        const {userName, email, passWord} = req.body;

        //check email
        const userExists = await User.exists({email});

        if(userExists)
            return res.status(409).send("Email already used.")

        //enrypt password
        const enryptedPassword = await bcrypt.hash(passWord,10)

        //create user in db
        const user = await User.create({
            userName,
            email: email.toLowerCase(),
            passWord: enryptedPassword,
        })

        //create jwt token
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

        res.status(201).json({
            userDetails:{
                email:user.email,
                userName:user.userName,
                token:token,
            },
        })

    } catch (err) {
        return res.status(500).send("Error occured. Please try again.")
    }
};

module.exports = postRegister;
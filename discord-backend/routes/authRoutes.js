const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const authControllers = require('../controllers/auth/authControllers');
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const auth = require('../middleware/auth');

const registerSchema = Joi.object({
    userName: Joi.string().min(3).max(12).required(),
    passWord: Joi.string().min(6).max(12).required(),
    email: Joi.string().email().required(),
});

const loginSchema = Joi.object({
    passWord: Joi.string().min(6).max(12).required(),
    email: Joi.string().email().required(),
});

router.post('/register',validator.body(registerSchema) ,authControllers.controllers.postRegister);
router.post('/login', validator.body(loginSchema), authControllers.controllers.postLogin);
router.get('/test', auth,(req,res)=>{
    res.send('request passed')
})

module.exports = router;
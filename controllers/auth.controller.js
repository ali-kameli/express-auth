const { userModel } = require("../model/user.model");
const { hashPassword, comparePassword } = require("../utils/auth.util");
const jwt = require('jsonwebtoken');

exports.Register = async (req, res, next) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await userModel.create({
            fullname, email, password: hashPassword(password)
        })
        res.send(user)
    } catch (error) {
        next(error)
    }
}

exports.Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send('user not found');
        }
        if (comparePassword(password, user.password)) {
            const token = this.signToken({ id: user._id, email: user.email })
            res.send({
                token,
                message: 'login successfully'
            })
        } else return res.status(404).send('email or password is wrong !')
    } catch (error) {
        next(error)
    }
}

exports.signToken = (payload) => {
    const secret = 'YWxpam9vbmlzZ29vZHByb2dyYW1tZXI=';
    return jwt.sign(payload, secret)
}

exports.verifyToken = (payload) => {
    const secret = 'YWxpam9vbmlzZ29vZHByb2dyYW1tZXI=';
    return jwt.verify(payload, secret)
}
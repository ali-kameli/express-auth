const { verifyToken } = require("../controllers/auth.controller");
const { userModel } = require("../model/user.model");

exports.checkAuth = async (req, res, next) => {
    try {
        const authorization = req.headers?.authorization;
        const [bearer, token] = authorization?.split(' ');
        if (bearer && bearer.toLowerCase() === 'bearer') {
            if (token) {
                const verifyResult = verifyToken(token);
                console.log(verifyResult);
                const user = await userModel.findOne({ email: verifyResult.email })
                req.userAuthenticated = !!user;
                if (!user) throw { status: 401, message: 'login failed , try again!' }
                req.user = {
                    fullname: user.fullname,
                    email: user.email
                }
                return next();
            }
            if (!user) throw { status: 401, message: 'auth failed , try again!' }
        }
    } catch (error) {
        next(error)
    }
}
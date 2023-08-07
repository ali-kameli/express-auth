const { genSaltSync, hashSync, compareSync } = require("bcrypt")

exports.hashPassword = (password) => {
    const salt = genSaltSync(10);
    return hashSync(password, salt);
}

exports.comparePassword = (password, hashed) => {
    return compareSync(password, hashed)
}
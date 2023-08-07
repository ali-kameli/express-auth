const Mongoose = require("mongoose");

const userSchema = new Mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

exports.userModel = Mongoose.model('user', userSchema);
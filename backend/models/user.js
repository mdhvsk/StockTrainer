const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require("joi-password-complexity")

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    stocksOwned: [{
        stockSymbol: String,
        quantity: Number
    }],
    stocksToWatch: [String],
    accountBalance: {
        type: Number,
        default: 0
    }


});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, { expiresIn: "10d" });
    return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
        stocksOwned: Joi.array().items(Joi.object({
            stockSymbol: Joi.string(),
            quantity: Joi.number().integer().min(0)
        })),
        stocksToWatch: Joi.array().items(Joi.string()),
        accountBalance: Joi.number().integer().min(0)
    });
    return schema.validate(data);
};

module.exports = { User, validate };

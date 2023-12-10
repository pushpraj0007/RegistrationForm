const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true
    },
    lname:{
        type: String,
        required: true
    },
    dob:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    number:{
        type: Number,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    cpassword:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    address2:{
        type: String
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    pinCode:{
        type: Number,
        required: true
    }
})

const Register = new mongoose.model("Registration", userSchema);
module.exports = Register;

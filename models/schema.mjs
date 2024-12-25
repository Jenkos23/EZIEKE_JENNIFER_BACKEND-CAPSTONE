import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:  {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true, //Enforces unique emails
        match:  [/.+@.+\..+/, 'Please enter a valid email address'], // Regex for basic email validation
    },


    password: {
        type: String,
        required: true,
        minlength: 8, // Requires at least 8 characters
        match: [
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/, 
            'Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character.'
        ], // Regex for password validation
    }
});

//Create User Model

const User = mongoose.model('User', UserSchema);

export default User;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

// Object modeling tool for MongoDB.
const submissionsSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    message: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [10, 'Minimum password length is 10 characters']
    }
    // auto assign timestamp and ID
}, { timestamps: true });

// 1st arg will make the name plural and auto look from MongoAtlas DB the Blog(s) collection
// 2nd arg is the schema
const Submissions = mongoose.model('submission', submissionsSchema);

module.exports = Submissions;
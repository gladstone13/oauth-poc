var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/oauth_poc');

var userSchema = new mongoose.Schema({
    username: String,
    email: String
}, { collection: 'usercollection' });

module.exports = { Mongoose: mongoose, UserSchema: userSchema }
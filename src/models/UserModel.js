const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: { type: mongoose.ObjectId, auto: true },
    name: String,
    email: String,
    registryDate: String,
});

module.exports = mongoose.model('User', UserSchema);
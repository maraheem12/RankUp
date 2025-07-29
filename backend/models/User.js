const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    score: Number,
    rank: Number,
});

module.exports = mongoose.model('User', userSchema);
    
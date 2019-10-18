const mongoose = require('mongoose');

const dbSchema = mongoose.Schema({
    name: String,
    age: String,
    gender: String,
    mobileNumber: String,
    crime: String,
    section: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Thiff', dbSchema);
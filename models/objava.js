const mongoose = require("mongoose");

const objavaSchema = mongoose.Schema({
    naslov: {
        type: String,
        required: true
    },
    tekst: {
        type: String,
        required: true
    },
    viewCounter: {
        type: Number
    },
    kategorija: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Objave', objavaSchema);

mongoose.Schema
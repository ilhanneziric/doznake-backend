const mongoose = require("mongoose");

const pitanjeSchema = mongoose.Schema({
    tekst: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    telefon: {
        type: String,
    },
    isOdgovoreno: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Pitanja', pitanjeSchema);

mongoose.Schema
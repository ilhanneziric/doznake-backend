const mongoose = require("mongoose");

const faqSchema = mongoose.Schema({
    pitanje: {
        type: String,
        required: true
    },
    odgovor: {
        type: String,
        required: true
    },
    viewCounter: {
        type: Number
    }
}, {timestamps: true});

module.exports = mongoose.model('Faqi', faqSchema);

mongoose.Schema
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    id: {
        type: String
    },
    type: {
        type: String
    },
    description: {
        type: String
    },
    photo: {
        type: String
    },
    price: {
        type: Number
    }

});

const items = mongoose.model("item", itemSchema)
module.exports = items;
const mongoose = require('mongoose');

const pricingSchema = new mongoose.Schema({
    organization_id: {
        type: mongoose.ObjectId,
        ref: "organization"
    },
    item_id: {
        type: mongoose.ObjectId,
        ref: "item"
    },
    zone: {
        type: String,
    },
    base_distance_in_km: {
        type: Number,
    },
    km_price: {
        type: Number,
    },
    fixed_price: {
        type: Number,
    }

});

const pricing = mongoose.model("pricing", pricingSchema);

module.exports = pricing
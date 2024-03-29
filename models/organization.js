const mongoose = require("mongoose");

const organizationsSchema = new mongoose.Schema(
    {
        id: {
            type: String
        },
        name: {
            type: String
        }
    }
);

const organizations = mongoose.model("organization", organizationsSchema);

module.exports = organizations;
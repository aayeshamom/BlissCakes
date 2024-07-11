const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://www.pexels.com/photo/black-round-cake-with-gold-details-on-brown-wooden-table-3923555/",
        set: (v) => v === "" ? "https://www.pexels.com/photo/black-round-cake-with-gold-details-on-brown-wooden-table-3923555/": 
        v,
    },
    price: Number,
    weight: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
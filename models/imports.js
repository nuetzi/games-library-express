const mongoose = require("mongoose");

const importsSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    aggregated_rating: {type: Number},
    cover: {type: Object, required: true},
    first_release_date: {type: Number, required: true},
    genres: {type: Array, required: true},
    involved_companies: {type: Array, required: true},
    name: {type: String, required: true},
    platforms: {type: Array, required: true},
    rating: {type: Number},
    summary: {type: String, required: true},
    total_rating: {type: Number},
    url: {type: String}
});

const Imports = mongoose.model("Import", importsSchema);
module.exports = Imports;
const mongoose = require("mongoose");

const importsSchema = new mongoose.Schema({
    title: {type: String, required: true},
    genres: {type: String, required: true},
    year: {type: Number, required: true},
    cover: {type: String, required: true},
    rating: {type: Number},
    platforms: {type: String, required: true},
    summary: {type: String, required: true},
    url: {type: String}
});

const Imports = mongoose.model("Import", importsSchema);
module.exports = Imports;
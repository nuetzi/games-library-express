const mongoose = require("mongoose");

const importsSchema = new mongoose.Schema({
    id: Number,
    aggregated_rating: Number,
    cover: {
        id: Number,
        url: String
    },
    first_release_date: Number,
    genres: [{
        id: Number,
        name: String
    }],
    involved_companies: [{
        id: Number,
        company: {
            id: Number,
            name: String
        }
    }],
    name: String,
    platforms: [{
        id: Number,
        name: String
    }],
    rating: Number,
    storyline: String,
    summary: String,
    total_rating: Number,
    url: String
});

const TopImports = mongoose.model("Import", importsSchema, "topRated");
module.exports = TopImports;

const NESImports = mongoose.model("Import", importsSchema, "topNES");
module.exports = NESImports;

const SNESImports = mongoose.model("Import", importsSchema, "topSNES");
module.exports = SNESImports;
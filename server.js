// Dependencies
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongo = require("mongodb");
const mongoose = require("mongoose");
const db = mongoose.connection;
const app = express();

// Environment Variables
const mongoURI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3001;

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
    () => console.log("Connected to MongoDB")
);

// Error / Disconnection
db.on("error", err => console.log(err.message));
db.on("disconnected", () => console.log("Mongo disconnected"));

// Middleware
app.use(express.urlencoded({ extended:false }));
app.use(express.json());
app.use(cors());

// Routes
const libraryController = require("./controllers/routes");
app.use("/library", libraryController);

const igdbTopGamesController = require("./controllers/topRated");
app.use("/toprated", igdbTopGamesController);

const igdbTopNESController = require("./controllers/topNES");
app.use("/topnes", igdbTopNESController);

const igdbTopSNESController = require("./controllers/topSNES");
app.use("/topsnes", igdbTopSNESController);

const igdbTopN64Controller = require("./controllers/topN64");
app.use("/topn64", igdbTopN64Controller);

const igdbTopGamecubeController = require("./controllers/topGamecube");
app.use("/topgamecube", igdbTopGamecubeController);

const igdbTopWiiController = require("./controllers/topWii");
app.use("/topwii", igdbTopWiiController);

const igdbTopWiiUController = require("./controllers/topWiiU");
app.use("/topwiiu", igdbTopWiiUController);

const igdbTopSwitchController = require("./controllers/topSwitch");
app.use("/topswitch", igdbTopSwitchController);

app.listen(PORT, () => {
    console.log("Listening on port ", PORT);
});
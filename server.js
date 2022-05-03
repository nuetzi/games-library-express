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

const igdbTopPS1Controller = require("./controllers/topPS1");
app.use("/topps1", igdbTopPS1Controller);

const igdbTopPS2Controller = require("./controllers/topPS2");
app.use("/topps2", igdbTopPS2Controller);

const igdbTopPS3Controller = require("./controllers/topPS3");
app.use("/topps3", igdbTopPS3Controller);

const igdbTopPS4Controller = require("./controllers/topPS4");
app.use("/topps4", igdbTopPS4Controller);

const igdbTopPS5Controller = require("./controllers/topPS5");
app.use("/topps5", igdbTopPS5Controller);

const igdbTopXbox360Controller = require("./controllers/topXbox360");
app.use("/topxbox360", igdbTopXbox360Controller);

const igdbTopXboxOneController = require("./controllers/topXboxOne");
app.use("/topxboxone", igdbTopXboxOneController);

const igdbTopXboxSeriesXController = require("./controllers/topXboxSeriesX");
app.use("/topxboxseriesx", igdbTopXboxSeriesXController);

const igdbTopXboxController = require("./controllers/topXbox");
app.use("/topxbox", igdbTopXboxController);

app.listen(PORT, () => {
    console.log("Listening on port ", PORT);
});
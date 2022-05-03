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

const igdbTopXboxController = require("./controllers/topXbox");
app.use("/topxbox", igdbTopXboxController);

const igdbTopXbox360Controller = require("./controllers/topXbox360");
app.use("/topxbox360", igdbTopXbox360Controller);

const igdbTopXboxOneController = require("./controllers/topXboxOne");
app.use("/topxboxone", igdbTopXboxOneController);

const igdbTopXboxSeriesXController = require("./controllers/topXboxSeriesX");
app.use("/topxboxseriesx", igdbTopXboxSeriesXController);
////////////////////////////////////////////////////////////////////////////////////////////////////
const igdbTopDreamcastController = require("./controllers/topDreamcast");
app.use("/topdreamcast", igdbTopDreamcastController);

const igdbTopGameBoyController = require("./controllers/topGameBoy");
app.use("/topgameboy", igdbTopGameBoyController);

const igdbTopGameBoyAdvanceController = require("./controllers/topGameBoyAdvance");
app.use("/topgba", igdbTopGameBoyAdvanceController);

const igdbTopGameBoyColorController = require("./controllers/topGameBoyColor");
app.use("/topgbc", igdbTopGameBoyColorController);

const igdbTopGameGearController = require("./controllers/topGameGear");
app.use("/topgamegear", igdbTopGameGearController);

const igdbTopGenesisController = require("./controllers/topGenesis");
app.use("/topgenesis", igdbTopGenesisController);

const igdbTop3DSController = require("./controllers/top3DS");
app.use("/top3ds", igdbTop3DSController);

const igdbTopNintendoDSController = require("./controllers/topNintendoDS");
app.use("/topnintendods", igdbTopNintendoDSController);

const igdbTopPSPController = require("./controllers/topPSP");
app.use("/toppsp", igdbTopPSPController);

const igdbTopPSVitaController = require("./controllers/topPSVita");
app.use("/toppsvita", igdbTopPSVitaController);

const igdbTopSaturnController = require("./controllers/topSaturn");
app.use("/topsaturn", igdbTopSaturnController);



app.listen(PORT, () => {
    console.log("Listening on port ", PORT);
});
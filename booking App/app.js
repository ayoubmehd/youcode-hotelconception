
const express = require("express");
const cors = require('cors')
const config = require("config");
require('dotenv').config();

const port = process.env.PORT || 3000



const connectDB = require("./config/db");
const mongoURI = config.get("mongoURI");

const app = express();

connectDB();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


const v1 = require('./routers/v1');

app.use("/api/v1/", v1);


app.listen(port, console.log(`App Running on http://localhost:${port }`));


require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRouter = require("./Routes/AuthRouter.js");
const ProductRouter = require("./Routes/ProductRouter.js");



//Require models

const { HoldingsModel } = require("./Model/HoldingModel");
const { PositionsModel } = require("./Model/PositionsModel");
const { OrdersModel } = require("./Model/OrdersModel");

//setup .env

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

//cors to handle cross origin api rqst
app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRouter);
app.use("/products", ProductRouter);















//route to handle allholdings
app.get("/allHoldings", async (req, res) => {
  let allHolding = await HoldingsModel.find({});
  res.json(allHolding);
});

//route to handle all position
app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});


//route to handler orders

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  try {
    await newOrder.save();
    res.status(201).send("Order saved successfully");
  } catch (error) {
    res.status(500).send("Error saving order");
    console.error(error);
  }
});

app.listen(PORT, () => {  //basic server setup
  console.log(`Server is running on port ${PORT}`);
  mongoose.connect(url);
  console.log("DB connected!");
});

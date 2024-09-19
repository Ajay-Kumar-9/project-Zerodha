const {Schema} = require("mongoose");

const HoldingSchema = new Schema({
name :String,
qty : Number,
avg : Number,
Price : Number,
net : String,
day : String,
});

module.exports = {HoldingSchema}
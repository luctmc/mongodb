const { default: mongoose } = require("mongoose");
const { v4: uuidv4} = require('uuid');

const itemSchema = new mongoose.Schema({
    _id: { type: String, default: uuidv4 },
    name: String, 
    description: String,
    price: Number,
    quantity: Number
});

module.exports = mongoose.model("Item", ItemSchema);
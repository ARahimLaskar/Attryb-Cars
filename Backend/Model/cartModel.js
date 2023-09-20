const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  name: { type: String },
  image: { type: String },
  price: { type: Number },
  fuel: { type: String },
  engine_capacity: { type: String },
  seats: { type: String },
  Transmission: { type: String },
  air_bags: { type: Number },
  type: { type: String },
  rating: { type: Number },
  // userId: { type: String, required: true },
});

const CartModel = mongoose.model("cart", cartSchema);

module.exports = { CartModel };

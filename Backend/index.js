const express = require("express");
const { connection } = require("./Config/db.js");
const products_routes = require("./Routes/products.js");
const cart_routes = require("./Routes/cart.js");
const userRoutes = require("./Routes/userRoutes.js");
const { authentication } = require("./Middleware/authentication.js");

const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 8000;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("home");
});

app.use("/user", userRoutes);

app.use("/products", products_routes);

app.use("/add-car", cart_routes);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("db connected");
  } catch (error) {
    console.log("error connecting db");
  }
  console.log(`server listening at port ${PORT}`);
});

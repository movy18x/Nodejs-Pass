import express from "express";
import ordersRoutes from "./Routes/orders.js";

const APP = express();
const PORT = process.env.PORT || 3000;

APP.get("", (req, res) => {
  res.status(200).send(`
    welcome Computiq open the URL  ---->      http://localhost:${PORT}/orders
    `);
});
APP.use("/orders", ordersRoutes);
APP.listen(PORT, () => {
  console.log(`on http://localhost:${PORT}/`);
});

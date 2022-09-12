import express from "express"; //import express framework for create to build REST API
import { finalSchema, finalTotal } from "../orderSchema.js";
const router = express.Router();

let schema = {
  orders: finalSchema,
  total: finalTotal,
};

router.get("/", (req, res) => {
  res.status(200).json(schema);
});

export default router;

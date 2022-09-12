import fs from "fs";
export var alice = fs
  .readFileSync("./orders/aliceOreder.txt", "utf-8")
  .toString();
export var mery = fs.readFileSync("./orders/meryOrder.txt", "utf-8").toString();
export var mohammed = fs
  .readFileSync("./orders/mohammedOrder.txt", "utf-8")
  .toString();

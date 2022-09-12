import fs from "fs";
let data = fs.readFileSync("./order.txt", "utf8").toString().split(",");

export let alice = data[0].toString();
export let mery = data[1].toString();
export let mohammed = data[2].toString();

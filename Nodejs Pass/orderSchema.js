import { alice, mery, mohammed } from "./fs.js";
let orders = [alice, mery, mohammed];
let finalTotal = 0;
let finalSchema = [];

orders.forEach((order) => {
  order = order.split("\r\n");
  order.forEach((row) => {
    if (row == "") {
      let idx = order.indexOf(row);
      if (idx > -1) {
        order.splice(idx, 1); // delete empty rows
      }
    }
  });
  let name = order[0];
  let mainAddress = order[1].split(" ");
  let items = Number(order[2]);
  let info = order[3 + items].toString().split(" ");

  let array = [];
  let mainTotal = 0;

  for (let index = 0; index < items; index++) {
    let oneItem = order[index + 3].split(" ");
    let itemSchema = {
      name: oneItem[0],
      count: oneItem[1],
      price: oneItem[2],
      total: oneItem[3],
    };
    mainTotal += Number(oneItem[3]);
    array.push(itemSchema);
  }
  finalTotal += mainTotal - (mainTotal * (Number(info[1]) / 100));

  let schema = {
    customer: name,
    address: {
      latitude: mainAddress[0],
      longitude: mainAddress[1],
    },
    items: array,
    total: mainTotal,
    discount: Number(info[1]),
    totalAfterDiscount: mainTotal - mainTotal * (Number(info[1]) / 100),
  };
  finalSchema.push(schema);
});
export { finalSchema, finalTotal };

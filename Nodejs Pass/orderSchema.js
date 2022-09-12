import { alice, mery, mohammed } from "./fs.js";
let orders = [alice, mery, mohammed];
let finalTotal = 0;
let finalSchema = [];

orders.forEach((order) => {
  let a = order.split(",");
  a.map((x) => {
    if (x != "") {
      let oneOrder = x.split("\r\n");
      let items = Number(oneOrder[2]);
      let info = oneOrder[3 + items].split(" ");

      let name = oneOrder[0];
      let mainaddress = oneOrder[1].split(" ");
      let array = [];
      let mainTotal = 0;
      for (let index = 0; index < items; index++) {
        let item = oneOrder[index + 3].split(" ");

        let itemSchema = {
          name: item[0],
          count: item[1],
          price: item[2],
          total: item[3],
        };
        mainTotal += Number(item[3]);
        array.push(itemSchema);
      }
      finalTotal += mainTotal;

      let schema = {
        customer: name,
        address: {
          latitude: mainaddress[0],
          longitude: mainaddress[1],
        },
        items: array,
        total: mainTotal,
        discount: Number(info[1]),
        totalAfterDiscount: mainTotal - mainTotal * (Number(info[1]) / 100),
      };
      finalSchema.push(schema);
    }
  });
});
export { finalSchema, finalTotal };

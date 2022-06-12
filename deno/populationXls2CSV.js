//import * as SheetJS from "https://code4fukui.github.io/sheetjs/xlsx.mjs";
//import * as SheetJS from "./xlsx.mjs";
import { SheetJS } from "https://js.sabae.cc/SheetJS.js";
import { dir2array } from "https://js.sabae.cc/dir2array.js";
import { Day } from "https://js.sabae.cc/DateTime.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

const path = "../org/sabae-jinko.files/";
const files = await dir2array(path);
const data = [];
for (const file of files) {
  const fn = path + file;
  //console.log(fn);
  const bin = await Deno.readFile(fn);
  const sheet = SheetJS.read(bin);
  //console.log(sheet);
  //console.log(sheet.SheetNames);
  for (const name in sheet.Sheets) {
    //console.log(name);
    const sh = sheet.Sheets[name];
    //console.log(sh, "L2", sh.L2, "K2", sh.K2);
    const date = sh.L2?.v ? sh.L2.v : sh.K2?.v;
    if (!date) {
      continue;
    }
    const pop = sh.M29.v;
    //console.log(name, date, pop);
    const date2 = new Day(date).toString();
    //console.log(date2, pop);
    if (data.find(d => d.date == date2)) {
      continue;
    }
    data.push({ date: date2, lgcode: "182079", population: pop });
  }
}
data.sort((a, b) => a.date.localeCompare(b.date));
console.log(data);
await Deno.writeTextFile("../sabae_population.csv", CSV.stringify(data));

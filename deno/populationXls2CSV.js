//import * as SheetJS from "https://code4fukui.github.io/sheetjs/xlsx.mjs";
//import * as SheetJS from "./xlsx.mjs";
import { SheetJS } from "https://js.sabae.cc/SheetJS.js";
import { dir2array } from "https://js.sabae.cc/dir2array.js";
import { Day } from "https://js.sabae.cc/DateTime.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

const areas = [
  { area: "鯖江", pos: "F9" },
  { area: "新横江", pos: "F13" },
  { area: "神明", pos: "F17" },
  { area: "中河", pos: "F21" },
  { area: "片上", pos: "F25" },
  { area: "立待", pos: "M9" },
  { area: "吉川", pos: "M13" },
  { area: "豊", pos: "M17" },
  { area: "北中山", pos: "M21" },
  { area: "河和田", pos: "M25" },
];

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
    const d = { date: date2, lgcode: "182079", population: pop };
    for (const area of areas) {
      d[area.area] = sh[area.pos].v;
    }
    data.push(d);
  }
}
data.sort((a, b) => a.date.localeCompare(b.date));
console.log(data);
await Deno.writeTextFile("../sabae_population.csv", CSV.stringify(data));

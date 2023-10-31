import { CSV } from "https://js.sabae.cc/CSV.js";
import { ArrayUtil } from "https://js.sabae.cc/ArrayUtil.js";

const url = "http://linkdata.org/api/1/rdf1s3648i/population_statistics.csv";
const data = await CSV.fetchJSON(url);
await Deno.writeTextFile("../tsuruga_population_statistics.csv", CSV.stringify(data));
//const data = await CSV.fetchJSON("../tsuruga_population_statistics.csv");

// population_statistics,調査年,標準地域コード,町丁字コード,都道府県名,市区町村名,行政区名,大字・町名,字・丁目名,最少年齢,最大年齢,人口,男性人口,女性人口,備考
// date,lgcode,population
const list = [];
const years = ArrayUtil.toUnique(data.map(d => d.調査年)).sort();
for (const year of years) {
  const p = data.filter(d => year == d.調査年 && !(d.最少年齢 == 0 && d.最大年齢 === "")).reduce((pre, cur) => pre += parseInt(cur.人口), 0);
  const lgcode = data[0].標準地域コード;
  list.push({
    date: year + "-01-01",
    lgcode,
    population: p,
  });
}
await Deno.writeTextFile("../tsuruga_population.csv", CSV.stringify(list));

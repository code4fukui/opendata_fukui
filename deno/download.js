import { fetchCurl } from "https://js.sabae.cc/fetchCurl.js";
import { HTMLParser } from "https://js.sabae.cc/HTMLParser.js";

const base = "https://www.city.sabae.fukui.jp/about_city/tokeijoho/";
const url = "https://www.city.sabae.fukui.jp/about_city/tokeijoho/sabae-jinko.html";
//const html = await (await fetch(url)).text();
const html = new TextDecoder().decode(await fetchCurl(url));
console.log(html);
const dom = HTMLParser.parse(html);
console.log(dom);
const as = dom.querySelectorAll("a.xls");
for (const a of as) {
  const name = a.getAttribute("href");
  const xlsurl = base + name;
  console.log(xlsurl);
  const bin = await fetchCurl(xlsurl);
  await Deno.writeFile("../org/" + name, bin);
}


/*
TLS alert received: AlertMessagePayload {
    level: Fatal,
    description: HandshakeFailure,
}
error: Uncaught (in promise) TypeError: error sending request for url (https://www.city.sabae.fukui.jp/about_city/tokeijoho/sabae-jinko.html): error trying to connect: received fatal alert: HandshakeFailure
*/


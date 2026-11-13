"use strict";
const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

// ===== 1. LoLのチーム =====
let lol = [
  { id:1, team:"T1", region:"LCK", code:"T1", country:"韓国" },
  { id:2, team:"Gen.G", region:"LCK", code:"GEN", country:"韓国" },
  { id:3, team:"Hanwha Life Esports", region:"LCK", code:"HLE", country:"韓国" },
  { id:4, team:"Bilibili Gaming", region:"LPL", code:"BLG", country:"中国" },
  { id:5, team:"Top Esports", region:"LPL", code:"TES", country:"中国" },
  { id:6, team:"G2 Esports", region:"LEC", code:"G2", country:"ヨーロッパ" },
  { id:7, team:"FlyQuest", region:"LCS", code:"FLY", country:"北アメリカ" },
];

app.get("/lol", (req, res) => {
  res.render('lol_list', { data: lol });
});

app.get("/lol/:number", (req, res) => {
  const number = req.params.number;
  const detail = lol[ number ];
  res.render('lol_detail', { data: detail });
});

app.get("/lol_add", (req, res) => {
  let id = Number( req.query.id );
  let team = req.query.team;
  let region = req.query.region;
  let code = req.query.code;
  let country = req.query.country;
  let newdata = { id: id, team: team, region: region, code: code, country: country };
  lol.push( newdata );
  res.render('lol_list', { data: lol });
});

// ===== 2. スポーツカー =====
let car = [
  { id:1, name:"マスタング GT", maker:"フォード", country:"アメリカ", engine:"5.0L V8", power:486 },
  { id:2, name:"カマロ SS", maker:"シボレー", country:"アメリカ", engine:"6.2L V8", power:461 },
  { id:3, name:"GR スープラ", maker:"トヨタ", country:"日本", engine:"3.0L 直列6気筒", power:387 },
  { id:4, name:"GT-R", maker:"日産", country:"日本", engine:"3.8L V6", power:570 },
  { id:5, name:"ロードスター", maker:"マツダ", country:"日本", engine:"1.5L 直列4気筒", power:136 },
  { id:6, name:"911 カレラ", maker:"ポルシェ", country:"ドイツ", engine:"3.0L 水平対向6気筒", power:394 },
];

app.get("/car", (req, res) => {
  res.render('car_list', { data: car });
});

app.get("/car/:number", (req, res) => {
  const number = req.params.number;
  const detail = car[ number ];
  res.render('car_detail', { data: detail });
});

app.get("/car_add", (req, res) => {
  let id = Number( req.query.id );
  let name = req.query.name;
  let maker = req.query.maker;
  let country = req.query.country;
  let engine = req.query.engine;
  let power = Number( req.query.power );
  let newdata = { id: id, name: name, maker: maker, country: country, engine: engine, power: power };
  car.push( newdata );
  res.render('car_list', { data: car });
});

// ===== 3. フレンチの料理 =====
let french = [
  { id:1, name:"エスカルゴのブルゴーニュ風", course:"前菜", ingredient:"エスカルゴ", price:1800 },
  { id:2, name:"ヴィシソワーズ", course:"スープ", ingredient:"じゃがいも", price:1200 },
  { id:3, name:"ブイヤベース", course:"魚料理", ingredient:"魚介類", price:3200 },
  { id:4, name:"舌平目のムニエル", course:"魚料理", ingredient:"舌平目", price:2800 },
  { id:5, name:"牛肉の赤ワイン煮込み", course:"肉料理", ingredient:"牛肉", price:3500 },
  { id:6, name:"鴨のコンフィ", course:"肉料理", ingredient:"鴨肉", price:3300 },
  { id:7, name:"クレームブリュレ", course:"デザート", ingredient:"卵，生クリーム", price:900 },
];

app.get("/french", (req, res) => {
  res.render('french_list', { data: french });
});

app.get("/french/:number", (req, res) => {
  const number = req.params.number;
  const detail = french[ number ];
  res.render('french_detail', { data: detail });
});

app.get("/french_add", (req, res) => {
  let id = Number( req.query.id );
  let name = req.query.name;
  let course = req.query.course;
  let ingredient = req.query.ingredient;
  let price = Number( req.query.price );
  let newdata = { id: id, name: name, course: course, ingredient: ingredient, price: price };
  french.push( newdata );
  res.render('french_list', { data: french });
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));

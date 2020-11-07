const cardsRouter = require("express").Router();
const fs = require("fs");
const path = require("path");

const cardsDataPath = path.join("./data", "cards.json");

cardsRouter.get("/", (req, res) => {
  fs.readFile(cardsDataPath, { encoding: "utf8" }, (err, data) => {
    if (err) {
      res.status(500).send({ message: "Запрашиваемый ресурс не найден" });
      return;
    }
    const cards = JSON.parse(data);
    res.send(cards);
  });
});

module.exports = cardsRouter;

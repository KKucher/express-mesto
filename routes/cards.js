const cardsRouter = require("express").Router();
const {
  getCards,
  createCard,
  deleteCard,
  putLike,
  deleteLike,
} = require("../controllers/cards");

cardsRouter.get("/", getCards);
cardsRouter.post("/", createCard);
cardsRouter.delete("/:cardId", deleteCard);

// Дополнительные роуты:
cardsRouter.put("/:cardId/likes", putLike);
cardsRouter.delete("/:cardId/likes", deleteLike);

module.exports = cardsRouter;

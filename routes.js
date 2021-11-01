const { json } = require("express");
const express = require("express");
const router = express.Router();
const posts = [
  {
    id: 1,
    author: "Lilian",
    title: "Stock market",
    body: "Post 1",
  },

  {
    id: 2,
    author: "Tom",
    title: "Covid 19",
    body: "Post 2",
  },

  {
    id: 3,
    author: "Vincent",
    title: "Django APIs",
    body: "Post 3",
  },

  {
    id: 4,
    author: "Cindy",
    title: "Node.js Streams",
    body: "Post 4",
  },
];
router.get("/", function (req, res, next) {
  res.json(posts);
});

module.exports = router;
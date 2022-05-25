const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const cors = require('cors')

router.use(cors())

const data = [{id: 1, a: "apple"}, {id: 2, b: "ball"}]

// Getting all
router.get("/", async (req, res) => {
  return res.json(data)
});

router.get("/fruit", async (req, res) => {
  return res.json({a: "apple", b: "ball", c: "candy", d: "dog"})
})

router.get("/:id", async (req, res) => {
  return res.json(data.find(object => +object.id === +req.params.id))
})

module.exports = router;
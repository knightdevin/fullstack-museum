const Painting = require("../db/painting");
const router = require("express").Router();

router.get("/", async (req, res, next) => {
  // get all painting
  try {
    const allPaintings = await Painting.findAll();
    res.json(allPaintings);
  } catch (err) {
    next(err);
  }
});

router.get("/:paintingId", async (req, res, next) => {
  try {
    const foundPainting = await Painting.findByPk(req.params.paintingId);
    res.json(foundPainting);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  const { name, year } = req.body;
  try {
    const newPainting = await Painting.create({ name, year });
    res.status(201).json(newPainting);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

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

module.exports = router;

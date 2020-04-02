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

router.delete("/:paintingId", async (req, res, next) => {
  try {
    await Painting.destroy({
      where: {
        id: req.params.paintingId
      }
    });

    res.send(req.params.paintingId);
  } catch (err) {
    next(err);
  }
});

router.put("/:paintingId", async (req, res, next) => {
  const { name } = req.body;
  try {
    const toBeUpdated = await Painting.findByPk(req.params.paintingId);

    const updated = await toBeUpdated.update({
      name: name
    });

    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

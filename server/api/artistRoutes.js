const Artist = require("../db/artist");
const Painting = require("../db/painting");
const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    const allArtists = await Artist.findAll({
      include: [{ model: Painting }]
    });
    res.json(allArtists);
  } catch (err) {
    next(err);
  }
});

router.get("/:artistId", async (req, res, next) => {
  try {
    const foundArtist = await Artist.findByPk(req.params.artistId, {
      include: [{ model: Painting }]
    });
    res.json(foundArtist);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

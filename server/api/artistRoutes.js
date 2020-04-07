// bring in the artist model!
const Artist = require('../db/artist');

// bring in the painting model so we can get an artist's paintings
const Painting = require('../db/painting');

// now bring in express & router!
const router = require('express').Router();

// ROUTE ===> '/'
router.get('/', async (req, res, next) => {
  // get all paintings an artist has painted!
  try {
    const allArtists = await Artist.findAll({
      include: [{ model: Painting }], // this works because we set the associations before!
    });
    res.json(allArtists);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// ROUTE ===> '/:artistId'
router.get('/:artistId', async (req, res, next) => {
  // get single painting by an artist's id
  try {
    const locatedArtist = await Artist.findByPk(req.params.artistId, {
      include: [{ model: Painting }], // this works because we set the associations before!
    });
    res.json(locatedArtist);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// export the router at the bottom when everything is done!
module.exports = router;

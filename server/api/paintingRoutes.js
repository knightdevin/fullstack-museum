// bring in the painting model.
const Painting = require('../db/painting');

// bring in express & the router
const router = require('express').Router();

// NOTE: Remember that we've set-up the api/paintings route on the index.js page in the api folder. So it's already mounted to that route --->  /api/paintings

// --------------------------------------------

// ROUTE ==>  '/'
router.get('/', async (req, res, next) => {
  // get all paintings
  try {
    const allPaintings = await Painting.findAll();
    res.json(allPaintings);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// ROUTE ==> '/:id'
router.get('/:paintingId', async (req, res, next) => {
  // get single painting by ID
  const locatedPainting = await Painting.findByPk(req.params.paintingId);
  res.json(locatedPainting);
  try {
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// don't forget to export the router!
module.exports = router;

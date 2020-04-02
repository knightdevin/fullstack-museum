const { green, red } = require("chalk");
const { db } = require("./server/db");
const Painting = require("./server/db/painting");
const Artist = require("./server/db/artist");

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Artist.create({
      name: "Pablo Picasso",
      dates: "1900 - 1940",
      country: "Spain"
    });

    await Artist.create({
      name: "Leonardo Da Vinci",
      dates: "1480 - 1515",
      country: "Italy"
    });

    await Painting.create({
      name: "Guernica",
      year: 1937,
      artistId: 1
    });

    await Painting.create({
      name: "Mona Lisa",
      year: 1503,
      artistId: 2
    });

    await Painting.create({
      name: "Mika's Dog Playing Poker",
      year: 2020,
      artistId: 1
    });
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch(err => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}

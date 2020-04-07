const { green, red } = require('chalk');
const { db } = require('./server/db');
const Painting = require('./server/db/painting');
const Artist = require('./server/db/artist');

const seed = async () => {
  try {
    await db.sync({ force: true });

    // seed your database here!

    // consider that you'll have assocations between the artists and the paintings!
    await Artist.create({
      name: 'Pablo Picasso',
      dates: '1881 - 1973',
      country: 'Spain',
      imageUrl:
        'https://secure.i.telegraph.co.uk/multimedia/archive/01773/pablo-picasso_1773978b.jpg',
    });

    await Artist.create({
      name: 'Leonardo Da Vinci',
      dates: '1452 - 1519',
      country: 'Italy',
      imageUrl:
        'https://cdn.cnn.com/cnnnext/dam/assets/190430054229-02-leonardo-da-vinci-hair-lock.jpg',
    });

    // now input the paintings seed information
    await Painting.create({
      name: 'Guernica',
      // artist: 'Pablo Picasso',
      year: 1937,
      artistId: 1,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg',
    });

    await Painting.create({
      name: 'Mona Lisa',
      // artist: 'Leonardo Da Vinci',
      year: 1503,
      artistId: 2,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
    });

    await Painting.create({
      name: 'Dogs Playing Poker',
      year: 2020,
      artistId: 2,
      imageUrl:
        'https://www.dogsplayingpoker.org/gallery/coolidge/img/poker_sympathy.jpg',
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
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}

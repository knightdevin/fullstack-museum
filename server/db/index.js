// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database');
const Painting = require('./painting');
const Artist = require('./artist');

// ============================================

// This is a great place to establish associations between your models
// (https://sequelize-guides.netlify.com/association-types/).
// Example:
//
// Puppy.belongsTo(Owner)

Artist.hasMany(Painting);
Painting.belongsTo(Artist);

// ============================================

module.exports = {
  // Include your models in this exports object as well!
  db,
  Painting,
  Artist,
};

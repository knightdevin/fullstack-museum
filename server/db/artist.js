const Sequelize = require('sequelize');
const db = require('./database');

const Artist = db.define('artists', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  dates: {
    type: Sequelize.STRING, // usually would be string, but walkthrough suggested string for simplicity to avoid considering a range at the moment. (worth thinking of in more in-depth projects.)
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Artist;

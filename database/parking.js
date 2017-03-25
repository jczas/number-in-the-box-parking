var config = require('../configuration/knexfile.js');
var knex = require('knex')(config);
var bookshelf = require('bookshelf')(knex);

var parking = bookshelf.Model.extend({
    tableName: 'parking',
});

module.exports = parking;

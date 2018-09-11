'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')(DATABASE);

// clear the console (just a convenience)
process.stdout.write('\x1Bc');

// Q1
// knex
//   .select()
//   .from('restaurants')
//   .then(results => console.log(results));

// Q2
knex
  .select()
  .from('restaurants')
  .where({cuisine: 'Italian'})
  .then(results => console.log(results));

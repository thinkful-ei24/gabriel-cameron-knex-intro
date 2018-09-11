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
// knex
//   .select()
//   .from('restaurants')
//   .where({cuisine: 'Italian'})
//   .then(results => console.log(results));

// Q3
// knex
//   .select('id', 'name')
//   .from('restaurants')
//   .where({ cuisine: 'Italian' })
//   .limit(10)
//   .then(results => console.log(results));

// Q4
// knex
//   .count()
//   .from('restaurants')
//   .where({ cuisine: 'Thai' })
//   .then(results => console.log(results));

// Q5
// knex
//   .count()
//   .from('restaurants')
//   .then(results => console.log(results));

// Q6
// knex('restaurants')
//   .where({cuisine: 'Thai', address_zipcode: '11372'})
//   .count()
//   .then(results => console.log(results));

// Q7
knex()
  .select()
  .from('restaurants')
  .where({ cuisine: 'Italian' })
  .whereIn('address_zipcode', ['10012', '10013', '10014'])
  .orderBy('name', 'ASC')
  .limit(5)
  .then(results => console.log(results));

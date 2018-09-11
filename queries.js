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
// knex()
//   .select()
//   .from('restaurants')
//   .where({ cuisine: 'Italian' })
//   .whereIn('address_zipcode', ['10012', '10013', '10014'])
//   .orderBy('name', 'ASC')
//   .limit(5)
//   .then(results => console.log(results));

// Q8
// knex
//   .insert({name: 'Byte Cafe',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '123',
//     address_street: 'Atlantic Avenue',
//     address_zipcode: '11231'})
//   .into('restaurants')
//   .returning(['id', 'name'])
//   .then(console.log);

// Q9
// knex
//   .insert({
//     name: 'Bit Cafe',
//     borough: 'Queens',
//     cuisine: 'Doughnuts',
//     address_building_number: '1012',
//     address_street: 'Western Avenue',
//     address_zipcode: '12345'
//   })
//   .into('restaurants')
//   .returning(['id', 'name'])
//   .then(console.log);

// Q10
// knex
//   .insert([{
//     name: 'A Cafe',
//     borough: 'Bronx',
//     cuisine: 'Italian',
//     address_building_number: '1179',
//     address_street: 'Eastern Avenue',
//     address_zipcode: '12333'
//   },{
//     name: 'B Cafe',
//     borough: 'Brooklyn',
//     cuisine: 'Chinese',
//     address_building_number: '11299',
//     address_street: 'First Avenue',
//     address_zipcode: '12354'
//   }, {
//     name: 'C Cafe',
//     borough: 'Bronx',
//     cuisine: 'Pizza',
//     address_building_number: '1234',
//     address_street: 'Second Avenue',
//     address_zipcode: '12321'
//   }])
//   .into('restaurants')
//   .returning(['id', 'name'])
//   .then(console.log);

// Q11
// knex
//   .from('restaurants')
//   .update({ name: 'DJ Reynolds Pub and Restaurant' })
//   .where({ nyc_restaurant_id: '30191841' })
//   .then(result => console.log(result));

// Q12
knex  
  .from('grades')
  .del()
  .where({id: 9})
  .then(console.log);

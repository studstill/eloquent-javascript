// When we looked up all the people in our data set that lived more than
// 90 years, only the latest generation in the data came out. Let’s take
// a closer look at that phenomenon.

// Compute and output the average age of the people in the ancestry data
// set per century. A person is assigned to a century by taking their year
// of death, dividing it by 100, and rounding it up, as in
// Math.ceil(person.died / 100).

var ancestry = require('./ancestry');

exports = module.exports = {};

ancestry = JSON.parse(ancestry);

function avergageAgeByCentury(ancestryData) {
  // include average helper function
    function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
  }
  // create object where each key is a century number
  var ageByCentury = {};
  ancestryData.forEach(function(person) {
    var century = Math.ceil(person.died / 100);
    if (!ageByCentury[century])
      ageByCentury[century] = [];
    ageByCentury[century].push(person.died - person.born);
  });
  // reduce the century element's array to an average age
  for (var century in ageByCentury) {
    ageByCentury[century] = average(ageByCentury[century]).toFixed(1);
  }
  return ageByCentury;
}

console.log(avergageAgeByCentury(ancestry));
// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94

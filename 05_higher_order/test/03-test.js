var averageAgeByCentury = require('../03_life_expectancy');
var expect = require('chai').expect;

describe('03_life_expectancy.js', function() {
  it('should compute the average age, by century of a given array of objects', function() {
    var people = [
      {name: 'Bill', born: 1776, died: 1876},
      {name: 'Arnold', born: 1850, died: 1925},
      {name: 'Wendy', born: 1525, died: 1550},
      {name: 'Sally', born: 1525, died: 1575}
    ];

    var results = {16: 37.5, 19: 100, 20: 75};
    console.log(averageAgeByCentury(people));
    expect(averageAgeByCentury(people)).to.deep.equal(results);
  });
});

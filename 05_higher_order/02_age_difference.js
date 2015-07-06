// Using the example data set from this chapter, compute the average age
// difference between mothers and children (the age of the mother when the
// child is born). You can use the average function defined earlier in
// this chapter.

// Note that not all the mothers mentioned in the data are themselves
// present in the array. The byName object, which makes it easy to find
// a person’s object from their name, might be useful here.

var ancestry = require('./ancestry');
ancestry = JSON.parse(ancestry);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function hasKnownMother(person) {
  if (byName[person.mother] && byName[person.mother].born && person.born)
    return person;
}

var withMothers = ancestry.filter(hasKnownMother);

var ageDiffArray = withMothers.map(function(person) {
  return person.born - byName[person.mother].born;
});

var averageOfAges = average(ageDiffArray);

console.log(averageOfAges);
// → 31.2

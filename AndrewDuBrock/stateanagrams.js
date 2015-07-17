/*
Well, this works....BUT....I was initially a dork and thought it was for making palindromes. Doh!
So, I had a bunch of code (almost done) and then when I figured out what was *really* supposed to be
going on, I tried to save some of it. So, I may have written it differently, if I knew what I was doing
from the beginning! (: 
*/
"use strict"

var fs = require('fs');

//get states from file, and delete extra spaces and lowercase the puppy
var states = (fs.readFileSync('states.txt', {encoding: 'utf8'})).replace(/[ ]/g, '').toLowerCase().split('\n')

//create each possible pair of states
function createStatePairs (array) {
  var pairedStates = [];
  var editingArray = array.slice(0);
  var editingString = '';
  array.forEach(function (string, index) {
    editingArray.splice(0, 1);
    for (var i = 0; i < editingArray.length ; i++) {
      editingString = string + editingArray[i];
      pairedStates.push(editingString);
    }
  })
  return pairedStates;
}

function anagramMatch (array) {
  var editingArray = array.slice(0);
  array.forEach(function (string, index) {
    var workingArray = string.split('');
    editingArray.splice(0, 1)
    for (var i = 0; i < editingArray.length; i++) {
      if (workingArray.sort() + '' === editingArray[i].split('').sort() + '') {
        console.log('\n' + string + ' is an anagram of ' + editingArray[i] + '.\n');
      }
    }
  })
}

var pairedStates = createStatePairs(states);
anagramMatch(pairedStates);

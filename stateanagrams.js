// ## Bonus Assignment

// For any given pair of US States, 
// can you find a distinct pair (containing neither of the states in the first pair), 
// that is an anagram for the first pair. Spaces do not count.

var fs = require('fs');
//regular expression used below by string method replace. finds all spaces
var reg = new RegExp("[ ]+","g");
fs.readFile('states.txt', 'utf8', function(err, contents){
  if (err) throw err; 
  var stateArray = contents.toUpperCase().split('\n');
  var pairs = [];
  var resultArray = []; 


// Make a multidimensional array of every possible state pair
  stateArray.forEach(function(item){
    stateArray.forEach(function(thing){
      pairs.push({state1: item, state2: thing, combined: ""});
    });
  });

  pairs.forEach(function(obj, position){
    //combine all state pairs into one string and store in a property
    obj.combined = (obj.state1 + obj.state2);
    //split new, combined string into letters, sort them alphabetically
    //join them back together. remove all spaces
    obj.combined = obj.combined.split("").sort().join("").replace(reg,"");
  });

  (function printAnswer (){ 
    pairs.forEach(function(obj, position){
      pairs.forEach(function(item, index){
        if  (obj.combined === item.combined &&
            obj.state1 !== item.state1 &&
            obj.state2 !== item.state2 &&
            obj.state1 !== item.state2 &&
            obj.state2 !== item.state1){
          //push results into an array
          //finds the result 8 times because of different starting comparision points

        resultArray.push([obj.state1, obj.state2, item.state1, item.state2]);
        }
      });
    });
  })();

  //print only one of the results because they different orders of the same result
  console.log(resultArray[0][0] + " and " + resultArray[0][1]  + " are an anagram for " +
              resultArray[0][2] + " and " + resultArray[0][3] );

});

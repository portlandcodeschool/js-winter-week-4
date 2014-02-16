var states = ["Wyoming", "Wisconsin", "West Virginia", "Washington", "Virginia",
              "Vermont", "Utah", "Texas", "Tennessee", "South Dakota", "South Carolina",
              "Rhode Island", "Pennsylvania", "Oregon", "Oklahoma", "Ohio", "North Dakota",
              "North Carolina", "New York", "New Mexico", "New Jersey", "New Hampshire", "Nevada",
              "Nebraska", "Montana", "Missouri", "Mississippi", "Minnesota", "Michigan", 
              "Massachusetts", "Maryland", "Maine", "Louisiana", "Kentucky", "Kansas", "Iowa", 
              "Indiana", "Illinois", "Idaho", "Hawaii", "Georgia", "Florida", "Delaware", "Connecticut",
              "Colorado", "California", "Arkansas", "Arizona", "Alaska", "Alabama"];

var statePairs = [];

for (var i = 0; i < 50; i++) {
  for (var j = i; j < 50; j++) {
    if (i !== j) {
      var statePair = states[i].toLowerCase().replace(' ', '') +
                      states[j].toLowerCase().replace(' ', '');
      if (statePairs[statePair.length]) {
        statePairs[statePair.length].push(statePair);
      } else {
        statePairs[statePair.length] = [statePair];
      }
    }
  }
}

statePairs.forEach(function (group) {
  for (var i = group.length - 1; i >= 0; i--) {
    for (var j = i; j >= 0; j--) {
      if (i !== j && isAnagram(group[i], group[j])) {
        console.log(group[i] + ' ' + group[j]);
      }
    }
  }
});

function isAnagram (refPair, testPair) {
  refPair = refPair.split('');
  testPair = testPair.split('');

  refPair.sort(alphabetically);
  testPair.sort(alphabetically);

  refPair = refPair.join('');
  testPair = testPair.join('');

  return (refPair === testPair);

  function alphabetically (a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

} 
"use strict";
var fs = require("fs");

fs.readFile("paradise.txt", {encoding: "utf8"}, wordFrequency);

function wordFrequency (err, contents){
  if (err) throw err;

  var arr = contents.split(/\s+/g);

  var wordObj = {};
  arr.forEach(function (word) {
    if (wordObj[word] === undefined){
      wordObj[word] = 1;
    } else {
      wordObj[word] += 1;
    }
  });

  return wordObj;
}

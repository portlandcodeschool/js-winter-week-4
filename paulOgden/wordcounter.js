var fs = require("fs");

fs.readFile("paradise.txt", {encoding: "utf8"}, countWords);

function countWords (err, contents){
  if (err) throw err;

  var arr = contents.split(/\s+/g);
  var count = arr.length;

  console.log("There are " + count + " words in the first chapter of Paradise Lost")
}

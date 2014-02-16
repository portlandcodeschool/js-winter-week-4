var fs = require("fs");

fs.readFile("../paradise.txt", { encoding: "utf8" }, wordCounter);

function wordCounter (err, contents) {
	if (err) throw err;
	var words = 0;

    //first remove non-letters
    contents = contents.replace( /[^A-Za-z0-9'-]+/gi,' ');

    //now split it at the spaces.
    words = contents.split(" ").length - 1;
    
    console.log("There are about " + words + " words in the first chapter of Paradise Lost.");
}
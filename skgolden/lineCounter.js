var fs = require("fs");

fs.readFile("../paradise.txt", { encoding: "utf8" }, lineCounter);

function lineCounter (err, contents) {
	if (err) throw err;
	var lines = contents.split("\n").length;
	console.log("There are " + lines + " lines in paradise.txt.");
}
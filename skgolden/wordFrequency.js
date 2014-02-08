var fs = require("fs");

fs.readFile("../paradise.txt", { encoding: "utf8" }, wordFrequency);

function wordFrequency (err, contents) {
	if (err) throw err;
	var words = 0;
	var word = "";
	var counts = [];
	var sortCount = [];

    //first remove non-letters
    contents = contents.replace( /[^A-Za-z0-9'-]+/gi,' ');

    //now split it at the spaces.
    words = contents.split(" ");
    
    //put unique words into an array
	for (var i = 0; i < words.length - 1; i++) {
		word = words[i].toLowerCase();
		counts[word] = counts[word] ? counts[word] + 1 : 1;
	}

    //sort our counts
	for (var count in counts){
		sortCount.push([count, counts[count]]);
	}
	sortCount.sort(function(a, b) {
		return a[1] - b[1];
	});

	//now list the first 100
	console.log("The 100 most frequent words in the first chapter of Paradise Lost are: ");
	for (var i = sortCount.length - 1, loopCount = 1; loopCount <= 100; i--) {
		console.log(loopCount + ": \"" + sortCount[i][0] + "\" appears " + sortCount[i][1] + " times.");
		loopCount++;
	}
    
}
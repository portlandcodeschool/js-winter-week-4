var fs = require('fs');

fs.readFile('paradise.txt', {encoding: 'utf8'}, function (err, contents) {
	if (err) throw err;
    // somehow count the words in contents :)
	//Splits each line into a new array
	var arrayOfLines = contents.split("\n");
	//Declare variable counter
	var counter = 0;
	for (var i=0; i < arrayOfLines.length; i++) {
		//If loop to remove any blank lines between paragraphs in the arrayOfLines
		if (arrayOfLines[i] !== "") {
			//Splits each word in each line into its own array by space
			var arrayOfWords = arrayOfLines[i].split(" ");
			for (var j=0; j<arrayOfWords.length; j++) {
				//If loop to remove any empty objects in the arrayOfWords to eliminate multiple spaces in text
				if (arrayOfWords[j] !== "") {
					//Counts each word on each line
					counter ++;
				}
			}
		}
	}
	console.log('There are ' + counter + ' words in the first chapter of paradise lost.');
});
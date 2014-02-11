var fs = require('fs');

Excerpt = function() {
	this.words = [];
};

Excerpt.prototype.getIndex = function(str) {
	this.words.forEach(function(item, index) {
		if(str===item) return index;
	});

	return -1;
};

Excerpt.prototype.addWord = function(str) {
	
	for (var i = 0; i < this.words.length; i++) {
		if (this.words[i].word === str) {
			this.words[i].frequency++;
			return;
		}
	}

	this.words.push({ word: str, frequency: 1});
};


Excerpt.prototype.printWords = function() {
	var self = this;
	console.log(this.words);
	/* this.words.forEach(function(item, index) {
		console.log(item + " - " + self.frequency[index]);
	}); */
};

Excerpt.prototype.parseFile = function(data) {
	var self = this;
	var lines = data.split("\n");
	lines.forEach(function(line) {
		var lineWords = line.split(" ");
		lineWords.forEach(function(word){
			self.addWord(removePunctuation(word));
		});
	});
};

Excerpt.prototype.sortByFrequency = function() {
	this.words.sort(function compare(a, b) {
		return b.frequency-a.frequency;
	});
}

Excerpt.prototype.printFirstHundred = function() {
	for (var i = 0; i < 100; i++) {
		console.log(this.words[i]);
	}
}

function removePunctuation(str) {
	str = str.replace(/['\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "");
	str = str.trim();
	return str;
}

var paradiseLost = new Excerpt();
var data = fs.readFileSync('./paradise.txt', {encoding: 'utf8'});
paradiseLost.parseFile(data);
//paradiseLost.printWords();
paradiseLost.sortByFrequency();
paradiseLost.printFirstHundred();



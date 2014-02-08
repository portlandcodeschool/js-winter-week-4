'use strict';
var fs = require('fs');
var paradise = fs.readFileSync('paradise.txt', { encoding: 'utf8' });
var rawParadise = paradise.replace(/'/g, '').split(/\W+/);
	rawParadise.pop();

function WordUp (leString) {
	this.word = leString;
	this.count = 1;
}

function Lost () {
	this.paradiseArr = [];
}

Lost.prototype.add = function (obj) {
	this.paradiseArr.push(obj);
};

Lost.prototype.bigFunction = function () {
	for (var i = rawParadise.length - 1; i >= 0; i--) {
		if (rawParadise[i].toLowerCase() === pLost.search( rawParadise[i].toLowerCase() )) {
			pLost.addCount(rawParadise[i]);
			//console.log('thing')
		} else {
			pLost.add(new WordUp(rawParadise[i].toLowerCase() ));
		}
	}
};

Lost.prototype.search = function (searchString) {
	for (var li = this.paradiseArr.length - 1; li >= 0; li--) {
		if (this.paradiseArr[li].word === searchString) return this.paradiseArr[li].word;
	}
 };

Lost.prototype.addCount = function (addString) {
	this.paradiseArr.forEach( function(thing){
		if (addString == thing.word) thing.count++;
	});
};

Lost.prototype.sorted = function () {
	this.paradiseArr.sort(function (a, b) {
		return a.count - b.count;
	});
};

var pLost = new Lost;
pLost.bigFunction();
pLost.sorted();
console.log(pLost.paradiseArr)
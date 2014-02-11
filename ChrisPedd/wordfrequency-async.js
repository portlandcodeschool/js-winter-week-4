'use strict';
var fs = require('fs');

fs.readFile('paradise.txt', { encoding: 'utf8' }, function (err, contents) {
	var rawParadise = contents.replace(/'/g, '').split(/\W+/);
		rawParadise.pop();
	var paradiseArr = [];

	function WordUp (leString) {
		this.word = leString;
		this.count = 1;
	}

	function searchArr (searchString) {
		for (var li = paradiseArr.length - 1; li >= 0; li--) {
			if (paradiseArr[li].word === searchString) return paradiseArr[li].word;
		}
	}

	function addArray (obj) {
		paradiseArr.push(obj);
	}

	function addCount (addString) {
		paradiseArr.forEach(function (thing) {
			if (addString == thing.word) thing.count++;
		});
	}

	for (var i = rawParadise.length - 1; i >= 0; i--) {
		if (rawParadise[i].toLowerCase() === searchArr(rawParadise[i].toLowerCase() )) {
			addCount(rawParadise[i]);
		} else {
			addArray(new WordUp(rawParadise[i].toLowerCase() ));
		}
	}

	paradiseArr = paradiseArr.sort(function (a,b) { a.count - b.count });
	console.log(paradiseArr);

})






/*

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

*/
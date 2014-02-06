var fs = require('fs');

var lines = fs.readFileSync('paradise.txt', {encoding: 'utf8'})
var lineCount = 1;

for (i=0;i<lines.length;i++){
	if(lines[i]==='\n'){
		lineCount++;
	}
} 

console.log('There are '+lineCount+" lines in the first chapter of paradise.txt");

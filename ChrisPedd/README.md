#Javascript Week 4 - Assignment

Follow our normal git workflow. Create your own branch and working subdirectory before you begin.

##Basic Assignment

Create a program to count the number of lines in the first chapter of paradise.txt. Call it linecounter.js. Use `fs.readFile`

```javascript
fs.readFile('paradise.txt', {encoding: 'utf8'}, function (err, contents) {

    // somehow count the lines in contents :)

});
```

## Intermediate Assignment

Create a program to count the number of words in the first chapter of paradise.txt. Call it wordcounter.js

## Advanced Assignment

Create a program to determine the 100 most frequent words in the first chapter of paradise.txt. Call it wordfrequency.js

## Bonus Assignment

Write a program to answer the following question:

For any given pair of US States, can you find a distinct pair (containing neither of the states in the first pair), that is an anagram for the first pair. Spaces do not count.

Call your program stateanagrams.js
var fs = require('fs');

function sum(arr) {
  var total = 0;
  for (var i = 2; i < arr.length; i++) {
    total += +arr[i];
  }
  return total;
}

function newlines(path) {
  var buf = fs.readFileSync(path);
  var str = buf.toString();
  return (str.split(/\n/).length) - 1
}

var countLines;
var path = process.argv[2];

function newlines(callback) {
  fs.readFile(path, function doneReading(err, fileContents) {
    var str = fileContents.toString();
    countLines = ((str.split(/\n/).length) - 1);
    callback();
  })
}

function returnCount() {
  console.log(countLines);
}

newlines(returnCount);
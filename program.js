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

console.log(newlines(process.argv[2]));
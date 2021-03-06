var fs = require('fs');
var p = require('path');
var mymodule = require('./mymodule.js');
var http = require('http');
var bl = require('bl');

var countLines;
// var listFiles = [];
var path = process.argv[2];
var fileExtension = process.argv[3];

//  --- Challenge 2 ---

function sum(arr) {
  var total = 0;
  for (var i = 2; i < arr.length; i++) {
    total += +arr[i];
  }
  return total;
}

// --- Challenge 3 ---

function newlines(path) {
  var buf = fs.readFileSync(path);
  var str = buf.toString();
  return (str.split(/\n/).length) - 1
}

// --- Challenge 4 ---

function newlines(callback) {
  fs.readFile(path, function doneReading(err, fileContents) {
    var str = fileContents.toString();
    countLines = ((str.split(/\n/).length) - 1);
    callback();
  });
}

function returnCount() {
  console.log(countLines);
}

// --- Challenge 5 ---

function fileList(callback) {
  fs.readdir(path, function doneReading(err, list) {
    for (var i = 0; i < list.length; i++) {
      if ( p.extname(list[i]) === "." + fileExtension ) {
        listFiles.push(list[i]);
      }
    }
    callback();
  });
}

function printFiles(response, listFiles) {
  if (response) {
    console.log('error!')
  }
  for (var i = 0; i < listFiles.length; i++) {
    console.log(listFiles[i]);
  }
}

// fileList(printFiles);

// --- Challenge 6 ---

// mymodule(path, fileExtension, printFiles);

// --- Challenge 7 ---

// http.get(path, function(response) {
//   response = response.setEncoding("utf8");
//   response.on("data", function(data) {
//     console.log(data);
//   });
// });

// --- Challenge 8 ---

// http.get(path, function(response) {
//   response = response.setEncoding("utf8");
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       console.log("Error: " + err);
//     } else {
//       console.log(data.length);
//       console.log(data.toString());
//     }
//   }))
// });

// Another solution:
// http.get(path, function(response) {
//   var allData = '';
//   response.setEncoding("utf8");
//   response.on("data", function(data) {
//     allData += data;
//   });
//   response.on('end', function() {
//     console.log(allData.length);
//     console.log(allData);
//   });
// });

// --- Challenge 9 ---

var allData = [];
var count = 0;

var getData = function(index) {
  http.get(process.argv[2 + index], function(response) {
    allData[index] = "";
    response.setEncoding("utf8");
    response.on("data", function(data) {
      allData[index] += data;
    });
    response.on('end', function() {
      count++;
      if (count === 3) { 
        displayData();
      }
    });
  });
}

var displayData = function() {
  for (var i = 0; i < 3; i++) {
    console.log(allData[i]);
  }
}

for (var i = 0; i < 3; i++) {
  // Run http for paths[i]
  getData(i);
}




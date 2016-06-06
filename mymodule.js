var fs = require('fs');
var p = require('path');
var listFiles = [];

module.exports = function(dirname, ext, callback) {
  fs.readdir(dirname, function doneReading(err, list) {
    if (err) {
      return callback(err);
    }
    for (var i = 0; i < list.length; i++) {
      if ( p.extname(list[i]) === "." + ext ) {
        listFiles.push(list[i]);
      }
    }
    return callback(null, listFiles);
  });
}
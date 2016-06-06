function sum(arr) {
  var total = 0;
  for (var i = 2; i < arr.length; i++) {
    total += +arr[i];
  }
  return total;
}

console.log(sum(process.argv));
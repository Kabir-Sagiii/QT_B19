var data = [10, 20, 30, 40, 50]; // [30,40]

var filteredArray = data.filter(function (element, index) {
  return element < 30;
});

console.log(filteredArray);

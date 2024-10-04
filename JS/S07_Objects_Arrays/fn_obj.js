var std = {
  name: "Raj",

  display: function fn() {
    console.log("Raj");
  },

  print: () => {
    var x = 20;
    console.log(x);
  },
};

var x = std.name;
console.log(x);

std.display();
std.print();

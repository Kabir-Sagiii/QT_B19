var data = ["Raj", "Sneha", "Ziya"];

var info = [
  100,
  true,
  "yes",
  { city: "delhi" },
  [2, 3],
  function f1() {
    console.log("hello dude");
  },
];

var obj = info[2];
console.log(obj);

info[5]();

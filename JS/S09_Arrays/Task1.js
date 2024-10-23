var productsData = [
  {
    modelName: "Iphone 16 Pro Max",
    price: "145000",
  },
  {
    modelName: "Iphone 16 ",
    price: "79000",
  },
  {
    modelName: "Iphone 16 +",
    price: "115000",
  },
  {
    modelName: "Iphone 16 Pro",
    price: "130000",
  },
];

//Print all the product price.

productsData.forEach(function (element, index) {
  //element = {modelName,price:""}

  console.log(element.price);
});

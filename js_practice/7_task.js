// Challenge 2: Product Object Transformer
// Transform an array of product objects by:
// 1. Adding a 'discountPrice' property (10% off original price)
// 2. Converting all prices to USD (assume original is in EUR, 1 EUR = 1.1 USD)
// 3. Making name uppercase
const products = [
    { name: "laptop", price: 1000 },
    { name: "phone", price: 500 },
    { name: "tablet", price: 300 }
  ];
  // Expected output: [
  //   { name: "LAPTOP", price: 1100, discountPrice: 990 },
  //   { name: "PHONE", price: 550, discountPrice: 495 },
  //   { name: "TABLET", price: 330, discountPrice: 297 }
  // ]
  
  // Your solution here
// console.log(products[0].name)
const transformedProducts = products.map(product => ({
    name: product.name.toUpperCase(),
    price: Math.round(product.price * 1.1),
    discountPrice: Math.round(product.price * 1.1 * 0.9)
  }));

  
  console.log(transformedProducts)
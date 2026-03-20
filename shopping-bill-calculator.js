// Customer Details

let customerName = "Chinnu";
let city = "Chennai";

// Product Details

let product1 = "Shoes";
let product2 = "Dress";
let product3 = "Watch";
let product4 = "Bag";

// Prices

let price1 = 1000;
let price2 = 800;
let price3 = 2000;
let price4 = 1000;

// Quantities

let quantity1 = 1;
let quantity2 = 2;
let quantity3 = 1;
let quantity4 = 1;

// Items Total

let total1=price1*quantity1;
let total2=price2*quantity2;
let total3=price3*quantity3;
let total4=price4*quantity4;

// Cost Total

let costTotal=total1+total2+total3+total4;

// Discount 

let discount = 500;

// Final Bill

let finalBill = costTotal-discount;

// Tax

let tax = finalBill*0.05;

// Grand Total

let grandTotal = finalBill+tax;

console.log("-------Shopping Bill-------");

console.log("Customer:", customerName);
console.log("City: city");

console.log(" ");

console.log(product1, "total:", total1);
console.log(product2, "total:", total2);
console.log(product3, "Total:", total3);
console.log(product4, "Total:", total4);

console.log(" ");

console.log("Cost Total:", costTotal);
console.log("Discount:", discount);
console.log("Tax:", tax);
console.log("Grand Total:", grandTotal);

console.log("-------Thank You-------");
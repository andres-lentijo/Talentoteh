
let i = 1;
let asteriscos = " ";

for( i > 0 ; i <= 10 ; i++){
     asteriscos += "*";
   console.log(i, asteriscos, "\n");
}

function outer() {
var a = 1;
function inner() {
var b = 2;
// we can access both `a` and `b` here
console.log( a + b ); // 3
}
inner();
// we can only access `a` here
console.log( a ); // 1
}
outer();

function outer() {
var a = 1;
function inner() {
var b = 2;
// we can access both `a` and `b` here
console.log( a + b ); // 3
}
inner();
// we can only access `a` here
console.log( a ); // 1
}
outer();

const TAX_RATE = 0.08;
function calculateFinalPurchaseAmount(amt) {
// calculate the new amount with the tax
amt = amt + (amt * TAX_RATE);
// return the new amount
return amt;
}
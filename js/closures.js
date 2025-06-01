//Closures is simply the ability of a function at the time of declaration to remember
//  the references of variables and parameters on its current scope, on its parent function scope,
//  on its parent's parent function scope until it reaches the global scope with the help of Scope Chain.
//  Basically it is the Scope created when the function was declared.


//🛍️ Real-Time Shopping Example – Discount Coupon System
// Imagine you're building a shopping cart system.
// You want to apply a discount coupon to the total price of items in the cart.
// The discount coupon is a function that takes the total price and returns the discounted price.
//
// Here's how you can use closures to achieve this:
function createCoupon(discountPercent) {
    return function(price) {
      return price - (price * discountPercent / 100);
    };
  }
  
//
// Usage
const blackFridayCoupon = createCoupon(30); // 30% off
const studentCoupon = createCoupon(15);     // 15% off

console.log(blackFridayCoupon(1000)); // 700
console.log(studentCoupon(1000));     // 850

// 🔍 How is this a closure?
// createCoupon() returns a function that still remembers discountPercent, even after it has returned.
// The inner function (price => ...) is the closure.
// It's like each user walks away with their own personalized "discount calculator."


// Closure	A function that "remembers"




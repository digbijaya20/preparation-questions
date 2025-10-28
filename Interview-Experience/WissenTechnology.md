## What is call, apply, and bind in JavaScript?

In JavaScript, call, apply, and bind are methods used to manipulate the this context of a function — essentially, they let you borrow functions from other objects.

Method	Usage	Description
call()	func.call(thisArg, arg1, arg2, ...)	Invokes the function immediately with thisArg and arguments
apply()	func.apply(thisArg, [argsArray])	Invokes the function immediately with thisArg and arguments as an array
bind()	func.bind(thisArg, arg1, arg2, ...)	Returns a new function with bound thisArg, does NOT invoke immediately

## What is Real-Life Use Case & Example for call, apply, and bind?

const utils = {
  fullName: function(city: string) {
    return `${this.firstName} ${this.lastName} from ${city}`;
  }
};

const user = {
  firstName: 'Alice',
  lastName: 'Doe'
};

// Borrowing method using `call`
console.log(utils.fullName.call(user, 'New York'));


class Counter {
  count = 0;
  increment() {
    this.count++;
    console.log(this.count);
  }
}

const counter = new Counter();
setTimeout(counter.increment.bind(counter), 1000);
✅ Real-world: Debouncing, throttling, or using setTimeout or setInterval in services or components.



### What is closure  and Real-Life Use Case & Example

A closure is a function that remembers the variables from its outer lexical scope even when that outer function has finished executing.


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



### How can we carry forward all the css of a component to its child components in angular?

In Angular, component styles are encapsulated by default using ViewEncapsulation, which means styles defined in a parent component do not automatically apply to child components. However, if you want to carry forward all the CSS of a component to its child components, 


Use ViewEncapsulation.None

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation: ViewEncapsulation.None // 👈 disables encapsulation
})
export class ParentComponent { }

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  encapsulation: ViewEncapsulation.None // 👈 optional if you want child to also apply global styles
})
export class ChildComponent { }


### How do we implement global error handling in Angular?


ErrorHandler	Uncaught app-level JS errors
HTTP Interceptor	API & backend error responses


### What is shadow DOM






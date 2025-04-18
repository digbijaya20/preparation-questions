//Difference between var, let and const
// 1. var is function scoped, let and const are block scoped
// 2. var can be redeclared and updated, let can be updated but not redeclared, const cannot be updated or redeclared
// 3. var is hoisted to the top of the function or global scope, let and const are not hoisted
// 4. var can be used before declaration, let and const cannot be used before declaration


// 5. Block-level Scope in Loops with let
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i); // 0, 1, 2, 3, 4
    }, 1000);
}
// When using let in a loop, each iteration of the loop creates a new instance of the variable.
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i); // 3,3,3
    }, 1000);
}
// This is different from let, which shares the same variable across all iterations.


// -----------------------------------------------------

// 🛠️ Fixing var with an IIFE (Immediately Invoked Function Expression)
//Before let, people used this trick to "trap" the value of i:
for (var i = 0; i < 3; i++) {
    (function(iCopy) {
        setTimeout(() => {
            console.log(iCopy); // 0, 1, 2
        }, 1000);
    })(i);
}

// 🔍 What's happening here:
// iCopy is a parameter of the immediately-invoked function.

// You're passing the current value of i to it.

// That value is captured in its own function scope.

// Then the arrow function inside setTimeout closes over iCopy, not i.

// So when the loop ends, the timeouts still have access to the values 0, 1, and 2 — not just the final value of i.

//This way, you pass i into a new function scope, which works like how let does.

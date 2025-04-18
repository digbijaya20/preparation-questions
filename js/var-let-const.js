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


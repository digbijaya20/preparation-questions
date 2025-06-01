Round - 1 (React js)

### 1. What is hoisting?
### 2. Output of below qs
```
var a = 5;
(function() {
    console.log(a);
    var a = 10;
})();
```

### 3. Output of below qs 
```
hello()
function hello(){
  console.log("Digbijaya")
}
```

### 4. Output of below qs
```
hello()
var hello = ()=> console.log("Digbijaya")
```

### 5. Output of below qs? How we can make the above return values 0 to 4 ? Do not change var to let.
```
for (var i=0; i<5; i++) {
  setTimeout(()=>{console.log(i)}, 
  i*1000); 
  
}
```

### 5. Output of below qs 

```
const a = [];
a[100] = 2;
console.log(a.length);

```


### 6. Output of below qs
```
const obj = {
    text: 'LOGGING',
    list: ['1', '2', '3'],
    log() {
        this.list.forEach(function (item) {
            console.log(this.text + item); // OUTPUT ????
        });
    },
};
obj.log()

```

### 7. Output of below qs
```
const firstPromise = new Promise((res, rej) => { 
  setTimeout(res, 500, 'one'); 
}); 
 
const secondPromise = new Promise((res, rej) => { 
  setTimeout(res, 100, 'two'); 
}); 
 
Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
```

### 8. Write a function that takes a string as input and returns the first non-repeated character in the string. If there are no non-repeated characters, return null. "abacddce" → “b” "acacddcb" → “b” "abbbb" → a "abcdef" → a “abab” → null
#### Ans:
```
function findCountOfChar(str){
    const resObj = {};
    for(let char of  str){
        resObj[char] = (resObj[char] || 0 ) +1;
    }
    for(let key in resObj){
      if( resObj[key] == 1) return key;
    }
    return resObj;
}
const resFun = findCountOfChar("abacbba");
console.log(resFun)
```

### 9. Write a custome debounce function. Create a function with console and call that in debounce function.
### 10. Given a string s, find the length of the longest substring without duplicate characters.
```
Example 1:
Input: s = "abcabcbb"Output: 3Explanation: The answer is "abc", with the length of 3.
Example 2:
Input: s = "bbbbb"Output: 1Explanation: The answer is "b", with the length of 1.
Example 3:
Input: s = "pwwkew"Output:
```

### 11. Output of below qs
```
console.log("1+1" === "2")
console.log(1+1)
console.log(1 + "1")
console.log(1-"1")
 
let obj1 = { name: "ravi" }
let obj2 = { name: "ravi" }
 
console.log(obj1 == obj2)
console.log(obj1 === obj2)
```

### 12. What is prototype inheritance.
### 13. Implement polyfil of includes
```
[1,2,3].customInclude(1) => true
[1,2,3].customInclude(5) => false
```

#### Ans:
```
Array.prototype.customInclude = function(value){
    for(let i = 0; i < this.length; i++){
        if(this[i] === value){
            return true;
        }
    }
    return false; // Only return false after checking all items
}
```

### 14. Create a 3 box of diagonal  in css, where 1st box should be in the top left corner, 2nd box in the middle and 3rd box in the bottom Right corner.

### 15. What is useRef?
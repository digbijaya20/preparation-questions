### 1.  🔁 What is debounce?
👨💻 **𝗗𝗲𝗯𝗼𝘂𝗻𝗰𝗶𝗻𝗴** : Delay a function call until the user stops an action for a specified time. 

Perfect for search boxes! Instead of firing an API call with every keystroke, debounce waits until typing stops (e.g., 500ms), reducing unnecessary calls and boosting performance.

```
𝘧𝘶𝘯𝘤𝘵𝘪𝘰𝘯 𝘥𝘦𝘣𝘰𝘶𝘯𝘤𝘦(𝘧𝘶𝘯𝘤, 𝘥𝘦𝘭𝘢𝘺) {
  𝘭𝘦𝘵 𝘵𝘪𝘮𝘦𝘳;
  𝘳𝘦𝘵𝘶𝘳𝘯 𝘧𝘶𝘯𝘤𝘵𝘪𝘰𝘯(...𝘢𝘳𝘨𝘴) {
    𝘤𝘭𝘦𝘢𝘳𝘛𝘪𝘮𝘦𝘰𝘶𝘵(𝘵𝘪𝘮𝘦𝘳);
    𝘵𝘪𝘮𝘦𝘳 = 𝘴𝘦𝘵𝘛𝘪𝘮𝘦𝘰𝘶𝘵(() => 𝘧𝘶𝘯𝘤.𝘢𝘱𝘱𝘭𝘺(𝘵𝘩𝘪𝘴, 𝘢𝘳𝘨𝘴), 𝘥𝘦𝘭𝘢𝘺);
  };
}

𝘤𝘰𝘯𝘴𝘵 𝘩𝘢𝘯𝘥𝘭𝘦𝘚𝘦𝘢𝘳𝘤𝘩 = 𝘥𝘦𝘣𝘰𝘶𝘯𝘤𝘦(() => {
  // 𝘚𝘦𝘢𝘳𝘤𝘩 𝘭𝘰𝘨𝘪𝘤 𝘩𝘦𝘳𝘦
}, 500);
```

👨💻 **𝗧𝗵𝗿𝗼𝘁𝘁𝗹𝗶𝗻𝗴** : Throttling is a technique that limits the execution of a function to once in a specified period, regardless of how many times it is triggered during that period. 

Great for scroll events! Instead of running a function on every scroll event, throttle ensures it's called at most once every few milliseconds (e.g., 200ms), enhancing efficiency.

```
𝘤𝘰𝘯𝘴𝘵 𝘵𝘩𝘳𝘰𝘵𝘵𝘭𝘦 = (𝘧𝘯, 𝘭𝘪𝘮𝘪𝘵) => {
 𝘭𝘦𝘵 𝘧𝘭𝘢𝘨 = 𝘵𝘳𝘶𝘦;
 𝘳𝘦𝘵𝘶𝘳𝘯 𝘧𝘶𝘯𝘤𝘵𝘪𝘰𝘯(){
  𝘭𝘦𝘵 𝘤𝘰𝘯𝘵𝘦𝘹𝘵 = 𝘵𝘩𝘪𝘴;
  𝘭𝘦𝘵 𝘢𝘳𝘨𝘴 = 𝘢𝘳𝘨𝘶𝘮𝘦𝘯𝘵𝘴;
  𝘪𝘧(𝘧𝘭𝘢𝘨){
   𝘧𝘯.𝘢𝘱𝘱𝘭𝘺(𝘤𝘰𝘯𝘵𝘦𝘹𝘵, 𝘢𝘳𝘨𝘴);
   𝘧𝘭𝘢𝘨 = 𝘧𝘢𝘭𝘴𝘦;
   𝘴𝘦𝘵𝘛𝘪𝘮𝘦𝘰𝘶𝘵(() => {
    𝘧𝘭𝘢𝘨 = 𝘵𝘳𝘶𝘦;
   }, 𝘭𝘪𝘮𝘪𝘵);
  }
 }
}

𝘤𝘰𝘯𝘴𝘵 𝘩𝘢𝘯𝘥𝘭𝘦𝘚𝘤𝘳𝘰𝘭𝘭 = 𝘵𝘩𝘳𝘰𝘵𝘵𝘭𝘦(() => {
  // 𝘚𝘤𝘳𝘰𝘭𝘭 𝘩𝘢𝘯𝘥𝘭𝘪𝘯𝘨 𝘭𝘰𝘨𝘪𝘤 𝘩𝘦𝘳𝘦
}, 200);
```

### 2.  🔁 What is Shadow DOM?
Shadow DOM is a web standard that allows developers to encapsulate a piece of HTML, CSS, and JavaScript so that it is isolated from the rest of the document. It’s a key part of Web Components, enabling better modularity and reusability of UI elements.

##### In simple terms:
The Shadow DOM creates a "shadow tree" inside an element—a hidden DOM subtree that is rendered but not accessible by default from the main document’s DOM.

##### Key Benefits:
- **Encapsulation**: Styles and scripts inside the shadow DOM don’t affect the rest of the page, and vice versa.

- **Scoped styling**: CSS defined in a shadow root applies only to elements inside it.

- **Cleaner structure**: You can build components (like <my-button>) without worrying about style or script clashes.

##### Use Cases:
- Custom elements and design systems
- Embeddable widgets (e.g. video players, chat boxes)

### 3.  Write a function to flatten below nested structure to array ?

```
let obj = {
    name: "Digbijaya Biswal",
    previousCompany: { id: 1, name: "Item One", available: true },
    location: ["Odisha", "Bengaluru"],
    previousCompany: ['LectureNotes', 'Cognizant', 'Thermo Fisher Scientific'],
    working: true,
    employerInfo: { id: 1, name: "Thermo Fisher", available: true }
}

```

Output
```
['Digbijaya Biswal', 'Odisha', 'Bengaluru', 'LectureNotes', 'Cognizant', 'Thermo Fisher Scientific', true, 1, 'Thermo Fisher', true]
```

##### Ans:
```
function flattenObjectValues(obj, resultArray = []) {
        // let resultArray = [];
        for (let key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                if (Array.isArray(obj[key])) {
                    resultArray.push(...obj[key]);
                } else {
                    // resultArray.push(...flattenObjectValues(obj[key]));
                    flattenObjectValues(obj[key], resultArray)
                }
            } else {
                resultArray.push(obj[key]);
            }
        }
        return resultArray; // Return instead of logging inside
}
```

### 4. How to check deep equality between JavaScript objects?
```
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
```
##### ⚠️ Using: JSON.stringify Comparison
```
JSON.stringify(obj1) === JSON.stringify(obj2);
```

##### 🔧 Write a Custom Deep Equality Function

```
function deepEqual(a, b) {
  if (a === b) return true;

  if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

console.log(isEqual(obj1, obj2)); // true

```
> **!deepEqual(a[key], b[key])** means:
"If the values at this key are not deeply equal, we can stop and say the objects are not the same."

### 4. Difference between Promises Vs async await in Javascript?

- **Promises** and **async/await** are two approaches for handling asynchronous operations in JavaScript.
- **Promises** provide a more structured alternative to callbacks using .then() and .catch() for chaining and error handling. However, with complex flows, they can quickly become hard to read or manage — especially with nested chains.

- **Async/await**, introduced in ES2017, is syntactic sugar over Promises that allows us to write asynchronous code in a synchronous style, which improves readability and maintainability. It makes sequential logic clearer, integrates well with try/catch for error handling, and pairs nicely with constructs like Promise.all() for running tasks in parallel.

- I typically default to **async/await** for cleaner, linear flows, but I still use raw Promises when I need more fine-grained control over chaining or concurrency."

```
function getUser() {
  return fetch('/api/user').then(res => res.json());
}

function getPosts(userId) {
  return fetch(`/api/posts?userId=${userId}`).then(res => res.json());
}

```
```
✅ Using Promises
getUser()
  .then(user => {
    return getPosts(user.id);
  })
  .then(posts => {
    console.log('Posts:', posts);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
```

```
✅ Async/Await Version:
async function loadUserAndPosts() {
  try {
    const user = await getUser();
    const posts = await getPosts(user.id);
    console.log('Posts:', posts);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

loadUserAndPosts();

```
| Feature            | Promises                                                | async/await                              |
| ------------------ | ------------------------------------------------------- | ---------------------------------------- |
| **Syntax Style**   | Uses `.then()` and `.catch()`                           | Uses `try...catch` with `await`          |
| **Readability**    | Can get messy with many `.then()` calls (callback-like) | Cleaner and easier to read               |
| **Error Handling** | `.catch()` for errors                                   | `try...catch` blocks                     |
| **Control Flow**   | Harder to write sequential steps                        | Easier to write step-by-step logic       |
| **Parallelism**    | Explicit with `Promise.all()`                           | Also supported via `await Promise.all()` |




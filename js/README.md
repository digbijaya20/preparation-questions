### 1.  🔁 What is debounce?
##### Debounce means:

“Wait until the user stops doing something for a certain amount of time before you respond.”

##### In other words:

- You don’t run a function immediately.
- You wait to see if the user is still typing/clicking/etc.
- If they stop for X milliseconds, then you run the function.

> Debounce delays a function from running until after a certain time has passed since the last time it was invoked.

##### 📦 Real-life analogy
Think of a search box:

- If you send an API request on every keystroke, it floods the server.
- Instead, you debounce: "Only send the API request 500ms after the user stops typing."

##### 🧠 Why it’s useful
- Improves performance
- Reduces API traffic
- Gives a smoother user experience

##### 💡 Think of it like:
- **Debounce** = "Wait until they stop talking for a moment before responding."

- **Throttle** = "Only respond once every X seconds, no matter how many times they speak."

##### 🔧 Code Example Comparison

```
> ✅ Debounce Implementation
 function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout); // Cancel any previous timer
    timeout = setTimeout(() => {
      func.apply(this, args); // Call after delay
    }, delay);
  };
}
```

```
> ✅ Throttle Implementation
function throttle(func, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}
```

<input onChange={debounce(handleSearch, 500)} />
>  ✅ Only sends API request 500ms after the user stops typing


 window.addEventListener("scroll", throttle(() => {
  console.log("Scroll event handled");
}, 200));

> ✅ Handles scroll once every 200ms, even if user scrolls constantly

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

# 4. Difference between Promises Vs async await in Javascript?

- **Promises** and **async/await** are two approaches for handling asynchronous operations in JavaScript.
- Promises provide a more structured alternative to callbacks using .then() and .catch() for chaining and error handling. However, with complex flows, they can quickly become hard to read or manage — especially with nested chains.

- Async/await, introduced in ES2017, is syntactic sugar over Promises that allows us to write asynchronous code in a synchronous style, which improves readability and maintainability. It makes sequential logic clearer, integrates well with try/catch for error handling, and pairs nicely with constructs like Promise.all() for running tasks in parallel.

- I typically default to async/await for cleaner, linear flows, but I still use raw Promises when I need more fine-grained control over chaining or concurrency."

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




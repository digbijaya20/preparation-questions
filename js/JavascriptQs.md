# 1.  🔁 What is debounce?
## Debounce means:

“Wait until the user stops doing something for a certain amount of time before you respond.”

## In other words:

- You don’t run a function immediately.
- You wait to see if the user is still typing/clicking/etc.
- If they stop for X milliseconds, then you run the function.

> Debounce delays a function from running until after a certain time has passed since the last time it was invoked.

## 📦 Real-life analogy
Think of a search box:

- If you send an API request on every keystroke, it floods the server.
- Instead, you debounce: "Only send the API request 500ms after the user stops typing."

## 🧠 Why it’s useful
- Improves performance
- Reduces API traffic
- Gives a smoother user experience

## 💡 Think of it like:
- **Debounce** = "Wait until they stop talking for a moment before responding."

- **Throttle** = "Only respond once every X seconds, no matter how many times they speak."

## 🔧 Code Example Comparison

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

# 2.  🔁 What is Shadow DOM?
Shadow DOM is a web standard that allows developers to encapsulate a piece of HTML, CSS, and JavaScript so that it is isolated from the rest of the document. It’s a key part of Web Components, enabling better modularity and reusability of UI elements.

## In simple terms:
The Shadow DOM creates a "shadow tree" inside an element—a hidden DOM subtree that is rendered but not accessible by default from the main document’s DOM.

## Key Benefits:
- **Encapsulation**: Styles and scripts inside the shadow DOM don’t affect the rest of the page, and vice versa.

- **Scoped styling**: CSS defined in a shadow root applies only to elements inside it.

- **Cleaner structure**: You can build components (like <my-button>) without worrying about style or script clashes.

## Use Cases:
- Custom elements and design systems
- Embeddable widgets (e.g. video players, chat boxes)

# 3.  Write a function to flatten below nested structure to array ?

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

### Ans
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


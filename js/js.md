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




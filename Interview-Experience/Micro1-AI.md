#### 1. what is context API? Sometimes Context API lead to performance issues, especially when the context value updates frequently. What performance problems might occur if context is used this way, and how would you address them to keep your app efficient?

#### 2. What is UseEffect hook and common  pitfalls developers encounter when working with UseEffect, and how do you avoid them?
| Issue                  | Fix                                  |
| ---------------------- | ------------------------------------ |
| Incorrect dependencies | Use ESLint plugin `exhaustive-deps`  |
| Async in `useEffect`   | Wrap in inner async function         |
| Leaks from effects     | Use cleanup function                 |
| Stale state or props   | Include them in dependency array     |
| Over-triggered effects | Optimize with conditions, debouncing |

#### 3. What is Closures, real time use case of it, Closures might cause unintended behavior, such as retaining stale data or causing memory leaks, and how you would mitigate such issues.
| Problem                            | JavaScript Analogy                   | Fix                                       |
| ---------------------------------- | ------------------------------------ | ----------------------------------------- |
| Stale data in closures             | Function captures old variable       | Use references (objects) or update inside |
| Memory leaks                       | Event listener holds on to variables | Remove listeners with cleanup             |
| Infinite update loops              | Recursive or repeated triggers       | Add conditions to control when it runs    |
| Async behavior with stale closures | Timeout uses old data                | Use reference or pass latest data in      |


#### 4. What is event loop in js, what is Asynchronous operations like Promises, SetTimeout, and AsyncAwait. What potential issues can arise from misunderstanding the event loop in complex applications?
| Issue                    | Cause                                    | Fix                                     |
| ------------------------ | ---------------------------------------- | --------------------------------------- |
| Race conditions          | Uncoordinated async calls                | Use `Promise.all`, `await` in order     |
| Misordered execution     | Not understanding microtask vs macrotask | Know: sync → Promise → setTimeout       |
| UI freeze / delays       | Blocking loop or sync work               | Break work into async chunks            |
| Uncaught errors          | Missing error handling                   | Use `try/catch` or `.catch()`           |
| Unexpected loop behavior | Shared closure in async                  | Use `let` or closures to preserve value |



#### 5. Solve below qs
##### 📋 Sorting Rules Summary
**Each task has:**

- An id (string)

- A priority (1–5, higher is better)

- An executionTime (in milliseconds)

- The execution order is determined by:

- Higher priority first

- For same priority, shorter execution time first

- If both are the same, preserve original order (stable sort)
```
const example1 = [
  { id: "T1", priority: 3, executionTime: 5 },
  { id: "T2", priority: 5, executionTime: 2 },
  { id: "T3", priority: 3, executionTime: 3 },
  { id: "T4", priority: 5, executionTime: 8 },
  { id: "T5", priority: 1, executionTime: 1 }
];

const example2 = [
  { id: "A", priority: 2, executionTime: 10 },
  { id: "B", priority: 2, executionTime: 10 },
  { id: "C", priority: 2, executionTime: 5 },
  { id: "D", priority: 4, executionTime: 3 }
];

console.log(sortTasks(example1)); // ["T2", "T4", "T3", "T1", "T5"]
console.log(sortTasks(example2)); // ["D", "C", "A", "B"]

```


```
function sortTasks(tasks) {
  return tasks
    .map((task, index) => ({ ...task, index })) // keep original position
    .sort((a, b) => {
      if (b.priority !== a.priority) {
        return b.priority - a.priority; // higher priority first
      }
      if (a.executionTime !== b.executionTime) {
        return a.executionTime - b.executionTime; // shorter execution time first
      }
      return a.index - b.index; // preserve original order
    })
    .map(task => task.id); // return only task IDs in order
}

```


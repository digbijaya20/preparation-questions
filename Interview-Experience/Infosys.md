#### Power Programmer specialist L1 MERN

#### Items list selection

#### Requirements

1. Invoke API

- Endpoint: https://jsonplaceholder.typicode.com/albums
- Method: GET
- Response Schema: [{
  id: 1
  title: "quidem molestiae enim"
  userId: 1
  }]

2. Display first 10 album titles in a list with checkboxes
3. Upon selection of atleast 5 items, enable submit button
4. Capitalize second letter of every word in the title

#### Additional Points

- Remove warnings
- Select by clicking on label as well

### Follow up question
1. Select 1st and 2nd checkbox by default

```
import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [items, setItems] = useState([]);
  const [sel, setSel] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const capitalData = data.map((item) => {
          const newTitle = item.title
            .split(' ')
            .map((word) => {
              if (word.length >= 2) {
                return word[0] + word[1].toUpperCase() + word.slice(2);
              }
              return word.toUpperCase();
            })
            .join(' ');
          return {
            ...item,
            title: newTitle,
          };
        });
        // const withCheckBox = capitalData.map((item)=>)
        setItems(capitalData);
      });
  }, []);
  const handleSelection = (item) => {
    console.log(item);
    setSel((pre) => {
      const selected = pre.find((s) => s.id === item.id);
      if (selected) {
        return pre.filter((s) => s.id !== item.id);
      } else {
        return [...pre, item];
      }
    });
    // setSel([...sel, item]);
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <ul>
        {items.map((item, i) => (
          <li key={item.id}>
            {i < 10 ? (
              <input
                id={item.id}
                type="checkbox"
                value={item.title}
                onChange={() => handleSelection(item)}
                checked={sel.filter((s) => s.id === item.id).length === 1}
              />
            ) : (
              ''
            )}
            <label>{item.title}</label>
          </li>
        ))}
      </ul>
      <div>Number of items selected: {sel.length}</div>
      <br />
      <button disabled={sel.length < 5}>Submit</button>
    </div>
  );
}
```

//https://stackblitz.com/edit/react-vk2myjgh?file=src%2FApp.js,src%2Findex.js

#### 2. What’s the difference between Controlled vs Uncontrolled Components in React?
#### 3. How to optimize react application? what is code splliting?
#### 4. What is autorization? how you will handle in node?
#### 5. Explain the project you worked on Hackthon.


#### Capitalize second letter of every word in the title

const dummyData = [
  { id: 1, title: 'lead front end developer', name: 'Alice Johnson' },
  { id: 2, title: 'senior user interface designer', name: 'Bob Smith' },
  { id: 3, title: 'junior software quality analyst', name: 'Charlie Lee' },
  { id: 4, title: 'cloud infrastructure support engineer', name: 'Dana White' },
  { id: 5, title: 'technical product development lead', name: 'Evan Martinez' },
];

```
const capitalize2ndLetterInTitle = dummyData.map((item)=>{
    const newTitle = item.title.split(' ').map((word)=>{
        return  word[0] + word[1].toUpperCase() + word.slice(2);
    })
    
    // console.log(newTitle.join(' '))
     return  {...item, title: newTitle.join(' ')} ;
});

const hello = modi.forEach(item=>{
    console.log(item.title )
    console.log('----------------')
    console.log(item.name)
    console.log('----------------')
})
console.log(hello)


```

#### Power Programmer specialist L1 MERN - Round 2

##### 1. How can I restrict access to certain Express.js APIs based on IP address?
"To process a large file like a 40 MB CSV or JSON in Node.js, I'd use fs.createReadStream() to stream the file chunk-by-chunk. This is much more memory-efficient than reading the whole file at once. I can then pipe it into a parser or manually process each chunk, and use readline for line-by-line handling if needed."
- ❌ fs.readFile() loads the entire file into memory, which is inefficient for large files
##### 2. Suppose a user uploads a 40 MB file. How would you read and process it efficiently on the backend using Node.js?
##### 2.i  Suppose a user uploads a 40 MB file. How would you upload a file and process in API?
Ans: 
- Split the file into chunks on the client
- Send them one-by-one (or in parallel)
- Reconstruct on the server
✅ Goal:
- Break a file into small chunks (e.g. 5MB each) and upload them one by one (or in parallel).
```
async function uploadInChunks() {
  const file = document.getElementById('fileInput').files[0];
  if (!file) return alert('Please select a file');

  const CHUNK_SIZE = 5 * 1024 * 1024; // 5MB
  const totalChunks = Math.ceil(file.size / CHUNK_SIZE);

  for (let i = 0; i < totalChunks; i++) {
    const start = i * CHUNK_SIZE;
    const end = Math.min(start + CHUNK_SIZE, file.size);
    const chunk = file.slice(start, end);

    const formData = new FormData();
    formData.append('chunk', chunk);
    formData.append('chunkIndex', i);
    formData.append('totalChunks', totalChunks);
    formData.append('fileName', file.name);

    try {
      await fetch('/upload-chunk', {
        method: 'POST',
        body: formData,
      });
      console.log(`Uploaded chunk ${i + 1}/${totalChunks}`);
    } catch (err) {
      console.error(`Error uploading chunk ${i}`, err);
      return;
    }
  }

  alert('File uploaded in chunks!');
}

```

🧩 What the Backend Should Do
- The server needs to:
- Receive each chunk with metadata (chunkIndex, fileName, etc.)
- Save each chunk in a temp folder
- Detect when all chunks are uploaded
- Merge chunks into the final file

#### What is a Blob?
A Blob (Binary Large Object) in JavaScript represents binary data, like files, images, videos, etc.

##### 3. How can I debug and stop a React component from re-rendering multiple times due to changes in another component?
Ans:
1. Use React Developer Tools
- Install the React Developer Tools extension.
- Use the "Highlight Updates" option to visually see which components are re-rendering.
- Track props/state changes and see what’s triggering re-renders.
2. Use React.memo (for Functional Components)
- Wrap your component to prevent unnecessary re-renders:
```
const MyComponent = React.memo((props) => {
  return <div>{props.value}</div>;
});

```
✅ Only re-renders if props change.

3. Check Parent Component
- If a parent is re-rendering frequently, its children will re-render too unless memoized. Investigate:
- State updates in parent
- Functions/objects passed as props (they change every render unless memoized)

4. Memoize Functions with useCallback
- Functions passed as props should be memoized to avoid triggering child re-renders:


##### 4. Which one will log 1st and why?
```
 useEffect(() => {
    console.log('hello');
  });
  useLayoutEffect(() => {
    console.log('hello2');
  });
```

#### 6. Output of below code, what is the value of c
```
const [c, setC] = useState(0);
  useEffect(() => {
    console.log('hello');
    setC(c + 1);
    setC(c+1)
    setC(c+1)
  });
```
Ans: This code will cause an infinite loop. Here’s why:
- The useEffect runs after every render.
- Each run calls setC with a new value (c + 1), so the state keeps changing.
- React keeps re-rendering forever.

#### 7. Output of below code, if we have empty dependancy, what is the value of c
```
const [c, setC] = useState(0);
  useEffect(() => {
    console.log('hello');
    setC(c + 1);
    setC(c+1)
    setC(c+1)
  },[]);
```
Ans: If all setState calls set the same value, will React apply the update only once. Here’s why:
- React will batch those updates and apply only one if the value is the same..
- All three are trying to set c to the same value(1).
- React optimizes by comparing the new value with the current state.
- If the value doesn’t change, React skips the re-render after batching.
- Even if these are inside useEffect, onClick, or any event handler — React will skip unnecessary renders.

#### 8. Output of below code, 
```
const [c, setC] = useState(0);
  useEffect(() => {
    console.log('hello');
    setC(c + 1);
    setC(c+1)
    setC(c+1)
  },[c]);
```
Ans: This code will cause an infinite loop.

#### 9. How do you implement useContext in your application?


#### Power Programmer specialist L1 MERN - Round 3

#### 1. Find the maximum sum of subarray.
#### 2. Scenario based questions on event bubbling and stopPropagresstion, 
#### 3. Qustions on optimazation, tree shaking, event loop.

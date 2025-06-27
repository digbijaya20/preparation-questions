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


# Items list selection

## Requirements

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

### Additional Points

- Remove warnings
- Select by clicking on label as well

### Follow up question
1. Select 1st and 2nd checkbox by default

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
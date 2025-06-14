import './nestedCheckbox.css';


function Checkbox (props) {

  function handleChange(e, node){
    const isChecked = e.target.checked;
    console.log(`Checkbox ${node.id} is now ${isChecked}`);
    props.setChecked((pre) =>{
      const newState = {...pre,[node.id]: isChecked}

      const updateChildrenCheckbox = (node) =>{
        node.children?.forEach((item) => {
        newState[item.id]  = isChecked;
        item.children &&  updateChildrenCheckbox(item);
        }
         
        )
      }
      updateChildrenCheckbox(node);
      return newState;
    }
  )
  }
  return (
    <div>
      {props.checkboxData.map((node) => {
        return (
            <div key={node.id} className ='parent'>
                <input type='checkbox' 
                checked={props.checked[node.id] || false}
                onChange={(e) => handleChange(e, node)}
                />
                <label>{node.name}</label>
                {node.children && 
                <Checkbox 
                checkboxData={node.children}
                 checked={props.checked}
                  setChecked={props.setChecked}
                  />
                  }
            </div>
        )
      }
      )}
    </div>
  );
}
export default Checkbox;

//description
// 1. The Checkbox component takes a prop called checkboxData, which is an array of objects.
// 2. Each object represents a checkbox with properties like id, name, and children.
// 3. The component uses the map function to iterate over the checkboxData array.
// 4. For each object, it creates a div containing an input checkbox and a label with the name.
// 5. If the object has children, it recursively calls the Checkbox component to render the child checkboxes.
// 6. The key prop is used to uniquely identify each checkbox in the list.
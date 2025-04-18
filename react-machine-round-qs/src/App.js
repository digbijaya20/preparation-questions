import './App.css';
import Checkbox from './components/nestedCheckboxQs/nestedCheckbox';
import checkboxData from './shared/mockData/checkboxData';

function App() {
  return (
    <div className="App">
      <Checkbox checkboxData = {checkboxData}/>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Checkbox from './components/nestedCheckboxQs/nestedCheckbox';
import TrafficLightComponent from './components/trafficLightQs/trafficeLightQs';
import checkboxData from './shared/mockData/checkboxData';
import DebounceComponent from './components/debounceQs/debounce';

function App() {
  const [checked, setChecked] = useState({1: true});
  return (
    <div className="App">
      <Checkbox 
      checkboxData = {checkboxData}
      checked={checked}
      setChecked={setChecked}
      />
       {/* <TrafficLightComponent  /> */}
       <DebounceComponent/>
    </div>
  );
}

export default App;

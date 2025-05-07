import { useState } from 'react';
import './App.css';
import Checkbox from './components/nestedCheckboxQs/nestedCheckbox';
import TrafficLightComponent from './components/trafficLightQs/trafficeLightQs';
import checkboxData from './shared/mockData/checkboxData';
import DebounceComponent from './components/debounceQs/debounce';
import CountryStateDependentDropdown from './components/countryStateDependentDropdown/countryStateDependentDropdown';

function App() {
  const [checked, setChecked] = useState({1: true});
  return (
    <div className="App">
      <Checkbox 
      checkboxData = {checkboxData}
      checked={checked}
      setChecked={setChecked}
      />
       <TrafficLightComponent  />
       <DebounceComponent/>
       <CountryStateDependentDropdown/>
    </div>
  );
}

export default App;

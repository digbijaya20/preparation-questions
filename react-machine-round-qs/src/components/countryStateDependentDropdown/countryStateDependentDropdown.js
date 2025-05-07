import { useState } from "react";

export default function CountryStateDependentDropdown() {
  const countryData = [
    { countryName: "India", statesName: ["OD", "PB", "AP", "KR"] },
    { countryName: "China", statesName: ["DC", "CS", "PBAP", "K88R"] },
  ];
  const [value, setValue] = useState("");
  const [stateData, setStateData] = useState([]);

  function handleCountryChange(event) {
    setValue(event.target.value);
    updateStateDropdown(event.target.value);
  }

  function updateStateDropdown(countryName) {
    console.log(countryName);
    const data = countryData.filter((data) => data.countryName === countryName);
    console.log(data);
    setStateData(data.length > 0 ? data[0].statesName : []);
  }

  return (
    <div className="App">
      <select onChange={handleCountryChange}>
        <option value={""}> Select country</option>
        {countryData.map((data) => (
          <option value={data.countryName} key={data.countryName}>
            {data.countryName}
          </option>
        ))}
      </select>
      <p>Selected Country: {value}</p>

      <select>
        {stateData.map((data) => (
          <option value={data} key={data}>
            {data}
          </option>
        ))}
      </select>
    </div>
  );
}

import React, {useState, useEffect} from 'react';
import './App.css';


function App() {

  const [jsonData, setJsonData] = useState([])

  const populateJsonData = () => {
    return jsonData.map(data => {
      return <div>
        <h3>{data.state}</h3>
        <ul>
          <li>Total Deaths - {data.death ? data.death : "N/A"}</li>
          <li>Total Deaths (only confirmed) - {data.deathConfirmed ? data.deathConfirmed : "N/A"}</li>
          <li>Currently on Ventilator: - {data.onVentilatorCurrently ? data.onVentilatorCurrently : "N/A"}</li>
        </ul>
        </div>
    })
  }

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.covidtracking.com/v1/states/current.json")
      const json = await res.json()
      console.log(json)
      setJsonData(json)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>Covid Stats</h1>
      {jsonData[0] ? populateJsonData() : "loading..."}
    </div>
  );
}

export default App;

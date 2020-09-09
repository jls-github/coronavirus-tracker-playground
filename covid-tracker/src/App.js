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
          <li>New Deaths - {data.deathIncrease ? data.deathIncrease : "N/A"}</li>
          <li>Total People Hospitalized (historical) - {data.hospitalizedCumulative ? data.hospitalizedCumulative : "N/A"}</li>
          <li>Curently Hospitalized - {data.hospitalizedCurrently ? data.hospitalizedCurrently : "N/A"}</li>
          <li>New Hospitalizations - {data.hospitalizedIncrease ? data.hospitalizedIncrease : "N/A"}</li>
          <li>Total ICU (historical) - {data.inIcuCumulative ? data.inIcuCumulative : "N/A"}</li>
          <li>Currently in ICU - {data.inIcuCurrently ? data.inIcuCurrently : "N/A"}</li>
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

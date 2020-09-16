import React, {useState, useEffect} from 'react';
import './App.css';
import CovidChart from './components/CovidChart.js';


function App() {

  const [jsonData, setJsonData] = useState([])

  const populateJsonData = () => {
    return jsonData.map(data => {
      return <div>
        <h3>{data.state}</h3>
        <CovidChart cases={data.positive} tests={data.totalTestResults} />
        <ul>
          <li>General Statistics
            <ul>
              <li>Positive (Confirmed and Probable) - {data.positive ? data.positive : "N/A"}</li>
              <li>Estimated Negative Results - {data.negative ? data.negative : "N/A"}</li>
              <li>New Positives - {data.positiveIncrease ? data.positiveIncrease : "N/A"}</li>
              <li>Total Deaths - {data.death ? data.death : "N/A"}</li>
              <li>Total Deaths (only confirmed) - {data.deathConfirmed ? data.deathConfirmed : "N/A"}</li>
              <li>New Deaths - {data.deathIncrease ? data.deathIncrease : "N/A"}</li>
              <li>Total Recovered (historical) - {data.recovered ? data.recovered : "N/A"}</li>
            </ul>
          </li>
          <li>Testing Statistics
            <ul>
              <li>Total Test Results (historical) - {data.totalTestResults ? data.totalTestResults : "N/A"}</li>
              <li>New Test Results - {data.totalTestResultsIncrease ? data.totalTestResultsIncrease : "N/A"}</li>
              <li>Pending Tests - {data.pending ? data.pending : "N/A"}</li>
              <li>Total Test Results Source - {data.totalTestResultsSource ? data.totalTestResultsSource : "N/A"}</li> 
              <li>Viral/PCR Tests
                <ul>
                  <li>Positive Viral Tests - {data.postiveCasesViral ? data.positiveCasesViral : "N/A"}</li>
                  <li>Negative Viral Tests - {data.negativeTestsViral ? data.negativeTestsViral : "N/A"}</li>
                  <li>Total Viral Tests (historical) - {data.totalTestsViral ? data.totalTestsViral : "N/A"}</li>
                  <li>Positive Viral Tests (historical) - {data.positiveTestsViral ? data.positiveTestsViral : "N/A"}</li>
                  <li>Total Viral Test Encounters (?) (historical?) - {data.totalTestEncountersViral ? data.totalTestEncountersViral : "N/A"}</li>
                  <li>Total Viral Tests (historical, by person) - {data.totalTestsPeopleViral ? data.totalTestsPeopleViral : "N/A"}</li>
                </ul>
              </li>
              <li>Antigen Tests
                <ul>
                  <li>Positive Antigen Tests (historical) - {data.positiveTestsAntigen ? data.positiveTestsAntigen : "N/A"}</li>
                  <li>Total Antigen Tests (historical) - {data.totalTestsAntigen ? data.totalTestsAntigen : "N/A"}</li>
                  <li>Total Antigen Tests (historical, by person) - {data.totalTestsPeopleAntigen ? data.totalTestsPeopleAntigen : "N/A"}</li>
                </ul>
              </li>
              <li>Antibody Tests
                <ul>
                  <li>Positive Antibody Tests (historical) - {data.positiveTestsAntibody ? data.positiveTestsAntibody : "N/A"}</li>
                  <li>Negative Antibody Tests - {data.negativeTestsAntibody ? data.negativeTestsAntibody : "N/A"}</li>
                  <li>Total Antibody Tests (historical) - {data.totalTestsAntibody ? data.totalTestsAntibody : "N/A"}</li>
                  <li>Total Antibody Tests (historical, by person) - {data.totalTestsPeopleAntibody ? data.totalTestsPeopleAntibody : "N/A"}</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Hospitalization Statistics
            <ul>
              <li>Total People Hospitalized (historical) - {data.hospitalizedCumulative ? data.hospitalizedCumulative : "N/A"}</li>
              <li>Curently Hospitalized - {data.hospitalizedCurrently ? data.hospitalizedCurrently : "N/A"}</li>
              <li>New Hospitalizations - {data.hospitalizedIncrease ? data.hospitalizedIncrease : "N/A"}</li>
              <li>Total ICU (historical) - {data.inIcuCumulative ? data.inIcuCumulative : "N/A"}</li>
              <li>Currently in ICU - {data.inIcuCurrently ? data.inIcuCurrently : "N/A"}</li>
              <li>Total On Ventilator (Historical) - {data.onVentilatorCumulative ? data.onVentilatorCumulative : "N/A"}</li>
              <li>Currently on Ventilator - {data.onVentilatoryCurrently ? data.onVentilatorCurrently : "N/A"}</li>
            </ul>
          </li>
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
      <p>Data from https://covidtracking.com/</p>
    </div>
  );
}

export default App;

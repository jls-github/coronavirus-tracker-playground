import React, {useState, useEffect} from 'react';
import './App.css';


function App() {

  const [jsonData, setJsonData] = useState([])

  const populateJsonData = () => {
    return jsonData.map(data => {
      return <div>{data}</div>
    })
  }

  // useEffect(() => {

  // }, [])

  return (
    <div>
      <h1>Covid Stats</h1>
      {jsonData[0] ? populateJsonData() : "loading..."}
    </div>
  );
}

export default App;

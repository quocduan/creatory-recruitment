import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  // We like to use axios for fetching from the backend 
  // but feel free to use something else if you prefer that!

  // const [apiData, setApiData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //       setIsLoading(true);
  //       setIsError(false);
  //       try {
  //         const result = await axios.get(
  //           '/results'
  //         );
  //         setIsLoading(false);
  //         setApiData(result.data);
  //       }
  //       catch (error) {
  //         setIsLoading(false);
  //         setIsError(true);
  //       }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="App">
      <h1>Results</h1>
      <p>Please visualize latest video measurement grouped by video and channel below (as you see fit).</p>
      <ul>
        <li>Result 1</li>
        <li>Result 2</li>
        <li>...</li>
      </ul>
    </div>
  );
}

export default App;

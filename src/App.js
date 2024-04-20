import React, { useEffect, useState } from "react";
import axios from 'axios';
import { apiUrl } from "./data";
import Tables from "./components/Tables";

const App = () => {

  const [holdings, setHoldings] = useState([]);


  async function fetchData() {
    try {

      const response = await axios.get(apiUrl, {
        headers: {
          Accept: 'application/json'
        },
      });
      console.log(response.data.payload);
      setHoldings(response.data.payload);
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }

  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1> Data:</h1>
      <Tables holdings={holdings} />

    </div>

  )

};

export default App;





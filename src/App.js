import React, { useEffect, useState } from "react";
import axios from 'axios';
import './App.css';
import { apiUrl } from "./data";
import Tables from "./components/Tables";
import Spinner from "./components/Spinner";

const App = () => {

  const [holdings, setHoldings] = useState([]);
  const [loading, setLoading] = useState(true);


  async function fetchData() {
    setLoading(true);
    console.log("spinner");
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
    setLoading(false);

  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-400">
      {/* <h1 className="text-red-900 w-11/12 max-w-[1200] mx-auto "> HireQuotient</h1> */}
      <img src="https://www.hirequotient.com/_next/image?url=https%3A%2F%2Fallhqclientpics.s3.ap-southeast-1.amazonaws.com%2Fwebsite_videos%2Fconsulting%2Flogo.png&w=256&q=75"
       alt="logo" className="w-80"/>
      <div className='w-11/12 max-w-[1200] mx-auto flex flex-wrap justify-center items-center min-h[50vh]'>
        {
          loading ? (<Spinner/>) : (<Tables holdings={holdings} />)
        }

      </div>


    </div>

  )

};

export default App;





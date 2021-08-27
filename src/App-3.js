import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      await axios("https://jsonplaceholder.typicode.com/users").then(
        (res) => {
          setData(res.data);
          setLoading(false);
        },
        (error) => {
          console.error("Error fetching data: ", error);
          setError(error);
        }
      );
    } catch (e) {
      console.log(e);
    }
    ///////////////////////
    // await axios("https://jsonplaceholder.typicode.com/users").then(
    //   (res) => {
    //     setData(res.data);
    //     setLoading(false);
    //   },
    //   (error) => {
    //     console.error("Error fetching data: ", error);
    //     setError(error);
    //   }
    // );
  };

  if (loading) return "Loading...";
  if (error) return "Error!";

  return (
    <div>
      <h1>Top 5 ways to fetch data in React - 3</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;

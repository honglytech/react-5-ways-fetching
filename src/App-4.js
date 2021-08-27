import "./App.css";
import React from "react";
import useFetch from "react-fetch-hook";

function App() {
  const { isLoading, error, data } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (isLoading) return "Loading...";
  if (error) return "Error!";

  return (
    <div>
      <h1>Top 5 ways to fetch data in React - 4</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;

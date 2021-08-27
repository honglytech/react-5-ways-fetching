import "./App.css";
import React from "react";
import { useQuery } from "react-query";

function App() {
  const { isLoading, error, data } = useQuery("users", () =>
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json()
    )
  );

  if (isLoading) return "Loading...";
  if (error) return "Error!";

  return (
    <div>
      <h1>Top 5 ways to fetch data in React - 5</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;

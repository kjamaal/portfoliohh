import React, { Component } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import logo from "./logo.svg";
import "./App.css";


function App() {
const [data, setData] = React.useState(null);

  React.useEffect(() => {
      fetch("/api", {
          method: "GET",
          headers: {
              "Content-Type": "application/json; text/html"
          }
      })
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <svg style={{
            border: "2px solid gold"
        }} />
        <p>{!data ? "Loading..." : data}</p>
      </header>
      <div className="sidebar">
      </div>
    </div>
  );
}

export default App;

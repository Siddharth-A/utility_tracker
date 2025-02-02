import * as React from "react";
import Navbar from "./components/Navbar";
import Chart from "./components/Chart";
import Pie from "./components/Pie";
import "./App.css";

function App({ toggleDarkMode }) {
  return (
    <div>
      <Navbar toggleDarkMode={toggleDarkMode}/>
      <Chart />
      {/* <Pie /> */}
      <p>test abce </p>
    </div>
  )
}

export default App;

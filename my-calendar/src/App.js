import "./App.css";
import { Calendar } from "./Components/Calendar";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Journal } from "./Components/Journal";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const url = "https://localhost:7233/WeatherForecast";

    fetch(url, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="Nav">
          <Link to="/">Calendar</Link>
          <Link to="/journal">Journal</Link>
        </div>
        <Routes>
          <Route path="/" element={<Calendar />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import { Calendar } from "./Components/Calendar";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Journal } from "./Components/Journal";
import { useEffect, useState } from "react";

import { request } from "./Utils";

function App() {
  const [journalEntry, setJournalEntry] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function getAllEvents() {
      let apiEvents = await request("Event/GetAllEvents");
      setEvents(apiEvents);
    }
    async function GetJournalEntry() {
      let entry = await request("JournalEntry/GetEntry");
      setJournalEntry(entry);
    }

    getAllEvents();
    GetJournalEntry();
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="Nav">
          <h3 style={{ padding: "0 20px" }} className={"Cursive"}>
            My Calendar
          </h3>
          <div className="NavLinks">
            <Link to="/">Calendar</Link>
            <Link to="/journal">Journal</Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Calendar />} />
          <Route path="/journal" element={<Journal Entry={journalEntry} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

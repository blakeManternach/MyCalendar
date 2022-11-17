import './App.css';
import Calendar from './Components/Calendar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Journal } from './Components/Journal';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    URL = 'https://localhost:7233/WeatherForecast';

    fetch(URL, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*'
      }
    })
    .then(response =>  response.json())
    .then(data => console.log(data));

  }, [])

  return (
      <div className="App">
        <Router >
            <Link to="/">Calendar</Link>
            <Link to="/journal">Journal</Link>
            <Routes>
              <Route path='/' element={<Calendar />}/>
              <Route path='/journal' element={<Journal />}/>
            </Routes>
        </Router>
      </div>

  );
}

export default App;

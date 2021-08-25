import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, {useEffect, useState}  from "react";
import Data from './Data.jsx'

function App() {
  const [user, setUser] = useState([])
  useEffect(() => {
      axios.get('http://localhost:3001/students/')
      .then((response) => {
          setUser(response.data);
      });
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Data from Postgres</h2>
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
          </tr>
          <Data props={user}/>
        </table>
      </header>
    </div>
  );
}

export default App;

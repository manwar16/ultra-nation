import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries]  = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(data => data.json())
    .then(data =>{
      setCountries(data);
      console.log(data);
      const names = data.map(country => country.name)
      console.log(names);
      
    } )
    
    .catch(error => console.log(error))
  }, [])
  return (
    <div className="App">
      <h2>Country loaded:{countries.length}</h2>
      <ul>
        {
          countries.map(country => <Country country={country}></Country>)
        }
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

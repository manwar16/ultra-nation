import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries]  = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(data => data.json())
    .then(data =>{
      setCountries(data);
      const names = data.map(country => country.name)
      
      
    } )
    
    .catch(error => console.log(error))
  }, [])
  const handleAddCountry = (country) =>{
    const newCart = [...cart, country];
    setCart(newCart);
    
  };
  return (
    <div className="App">
      <h2>Country loaded:{countries.length}</h2>
      <h4>Country Added:{cart.length}</h4>
      <Cart cart={cart}></Cart>
      <ul>
        {
          countries.map(country => <Country country={country} key={country.alpha3Code} handleAddCountry={handleAddCountry}></Country>)
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

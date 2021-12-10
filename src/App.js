import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import theme from './components/theme/index';

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect( () => axios.get('https://swapi.dev/api/people')
  .then( res => {
      setCharacters(res.data);
      console.log(res.data);
  }), []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character theme={theme} characters={characters}/>
    </div>
  );
}

export default App;

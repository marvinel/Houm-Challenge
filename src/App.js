import './App.css';
import axios from 'axios';

import List from './Components/List';

import Header from './Components/Header';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <Header />
      <div className='content'>
       
        <List />
      </div>

    </div>
  );
}

export default App;

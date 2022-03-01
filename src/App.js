import './App.css';
import axios from 'axios';

import List from './Components/List';
import SideBar from './Components/SideBar';
import Header from './Components/Header';

function App() {


  return (
    <div className="App">
      <Header />
      <div className='content'>
      <SideBar />
      <List />
      </div>

    </div>
  );
}

export default App;

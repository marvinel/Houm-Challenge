import './App.css';

import List from './Components/List';
import Header from './Components/Header';


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

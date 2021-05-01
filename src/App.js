import data from './data';
import People from './components/people';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const { people } = data;

const App = () => { 
  return (
    <div className="App">
     { People(people)}
    </div>
  );
}

export default App;

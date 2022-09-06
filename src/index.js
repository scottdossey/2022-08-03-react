import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './components/Board';
import MyComponent from './components/MyComponent';
//import BoardOldWay from './components/BoardOldWay';
import Counter from './components/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));

let person = {
  name: "Scott",
  occupation: "Teacher"
};

root.render(
  <React.StrictMode>   
    <Board/>    
    <Counter/>
  </React.StrictMode>
);


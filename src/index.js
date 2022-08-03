import React from 'react';
import ReactDOM from 'react-dom/client';
//import Board from './components/Board';
import BoardOldWay from './components/BoardOldWay';
import Counter from './components/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>   
    <BoardOldWay />
  </React.StrictMode>
);


require('./shared/styles/main.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import reducer from './reducer';

const initialState = {
  course: {
    name: "Country Club",
    holes: [
      { par: 4, hcp: 13 },
      { par: 5, hcp: 1 },
      { par: 4, hcp: 15 },
      { par: 3, hcp: 11 },
      { par: 5, hcp: 3 },
      { par: 4, hcp: 5 },
      { par: 4, hcp: 7 },
      { par: 3, hcp: 17 },
      { par: 4, hcp: 9 },
      { par: 3, hcp: 16 },
      { par: 5, hcp: 18 },
      { par: 4, hcp: 14 },
      { par: 4, hcp: 4 },
      { par: 3, hcp: 10 },
      { par: 4, hcp: 8 },
      { par: 4, hcp: 2 },
      { par: 5, hcp: 12 },
      { par: 4, hcp: 16 }
    ]
  },
  players: [
    {
      id: 0,
      name: "Player 1",
      hcp: 0,
      score: [ 5, 5, 5, 3]
    },{
      id: 1,
      name: "Player 2",
      hcp: 2,
      score: []
    }

  ]
};

const store = createStore( reducer, initialState );
const render = () => {
  ReactDOM.render(<App store={ store } />, document.getElementById('app'));
}

store.subscribe( render );
render();

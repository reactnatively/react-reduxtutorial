import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';

function reducer(state, action) {
  //console.log(action);
  if(action.type === 'changeState') {
    return action.payload.newState;
  }

  return 'State';
}

const store = createStore(reducer);

console.log(store.getState());

const action = {
  type: 'changeState',
  payload: {
    newState: 'New State'
  }
};

store.dispatch(action);

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

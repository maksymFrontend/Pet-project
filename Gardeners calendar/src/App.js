import { Provider }   from 'react-redux';
import React from 'react';
import { Router } from 'react-router-dom';
import { Root } from './components/Root'
import { store } from './reducers/createStore'
import { history } from './helpers'

const REACT_VERSION = React.version;
console.log(REACT_VERSION) // 17.0.2

function App(){
  return (
    <>
      <Router history={history}>
        <Provider store={store}>
          <Root/>
        </Provider>
      </Router>
    </>
  )
}

export default App;

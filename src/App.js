import React, { Component } from 'react';
import RouterWarp from './router/index';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return(
      // <Fragment>
        <Provider store={store}>
          <RouterWarp/>
        </Provider>
      // </Fragment>
    )
  }
}

export default App;

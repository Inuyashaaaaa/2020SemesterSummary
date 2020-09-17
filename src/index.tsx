import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { store, actionCreators } from './store'
import { Provider } from 'react-redux'
import Loadable from 'react-loadable'
import 'normalize.css'
import Loading from './components/loading'
import './assets/font/font.css'

const LoadableApp = Loadable.Map({
  loader: {
    App: () => import('./App'),
    Data: actionCreators.getData()
  },
  render(loaded) {
    const App = loaded.App.default;
    return <App />;
  },
  loading: Loading
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LoadableApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

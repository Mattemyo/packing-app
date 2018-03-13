import { BrowserRouter, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import history from 'history';
import { ConnectedRouter, routerMiddleware, connectRouter } from 'connected-react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import './index.css';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
const history = createBrowserHistory();
const store = createStore(
  connectRouter(history)(rootReducer), // new root reducer with router state
  initialState,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      routerMiddleware(history) // for dispatching history actions
      // ... other middlewares ...
    )
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {' '}
      {/* place ConnectedRouter under Provider */}
      <Route component={App} />
    </ConnectedRouter>{' '}
    {/* place ConnectedRouter under Provider */}
  </Provider>,
  rootElement
);

registerServiceWorker();

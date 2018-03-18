import { BrowserRouter, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter, routerMiddleware, connectRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import store, {history} from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route component={App} />
    </ConnectedRouter>
  </Provider>,
  rootElement
);

registerServiceWorker();

import 'babel-polyfill'

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import createHistory from 'history/createBrowserHistory'

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { routeComponents } from './routes';
import thunkMiddleware from 'redux-thunk';
import appReducers from './reducers';
import { Header, Footer } from './components';
import './index.css';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middlewares = [];
middlewares.push(routerMiddleware(history));
middlewares.push(thunkMiddleware);

if (process.env.NODE_ENV === 'development') {
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);
}

const store = createStore(
    combineReducers({
        ...appReducers,
        router: routerReducer
    }),
    applyMiddleware(...middlewares)
)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter onUpdate={() => window.scrollTo(0, 0)} history={history}>
            <div>
                <Header />
                {routeComponents}
                <Footer />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();

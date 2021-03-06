import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import authReducer from './store/reducers/authReducer';
import userDataReducer  from './store/reducers/userDataReducer';
import favoriteReducer from './store/reducers/favoritesReducer';

//const composeEnhancers =  process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  user:userDataReducer,
  fav: favoriteReducer
});

const store = createStore(rootReducer,(
  applyMiddleware(thunk)
));

const app = (
  <Provider store={store}>
     <BrowserRouter>
      <App/>
  </BrowserRouter>
  </Provider>
  
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

import { createStore, applyMiddleware } from 'redux';  
import { RootReducer } from './../../reducers/RootReducer';
import thunk from 'redux-thunk';

export const Store = createStore(
    RootReducer,
    applyMiddleware(thunk)
  );;
import { createStore } from 'redux';
import { RootReducer } from './../../reducers/RootReducer';

export const Store = createStore(RootReducer);
import { ClickReducer } from './ClickReducer';
import { OtherReducer } from './OtherReducer';
import { combineReducers } from 'redux';

export const RootReducer = combineReducers({
    clickState: ClickReducer,
    otherState: OtherReducer
})
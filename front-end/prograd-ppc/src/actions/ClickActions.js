import { CLICK_UPDATE_VALUE } from './actionTypes';

export const clickButton = (value) => (dispach) => {
   dispach({ type: CLICK_UPDATE_VALUE, payload: value});
};
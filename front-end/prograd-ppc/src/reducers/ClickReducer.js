import { CLICK_UPDATE_VALUE } from './../actions/actionTypes';

const initialState = {
    newValue: 'xxx'
};

export const ClickReducer = (state = initialState, action) => {
    switch(action.type){
        case CLICK_UPDATE_VALUE:
            return {
                ...state,
                newValue: action.payload
            };
        default:
            return state;
    }
};


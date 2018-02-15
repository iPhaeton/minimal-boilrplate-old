import {combineReducers} from 'redux';

export default function createReducer() {
    return combineReducers({
        initial: (state: any) => state || {count: 0}
    });
}
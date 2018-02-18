import {combineReducers} from 'redux';

export default function createReducer(asyncReducers: any) {//todo: do not use any
    return combineReducers({
        initial: (state: any) => state || {count: 0},
        ...asyncReducers,
    });
}
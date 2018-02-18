import {combineReducers} from 'redux';
import {IAsyncReducers} from "types/redux";
import {IState, IInitialState} from "./types/states";

export default function createReducer(asyncReducers: IAsyncReducers) {//todo: do not use any
    return combineReducers<IState>({
        initial: (state: IInitialState) => state || {count: 0},
        ...asyncReducers,
    });
}
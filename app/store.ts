import {createStore, compose, applyMiddleware, Store, Reducer} from 'redux';
import createReducer from './reducer';
import freeze from 'redux-freeze';
import {IStore} from "types/redux";
import {IState} from "./types/states";

declare const window: Window & {
    devToolsExtension: any,
};

const devtools = window.devToolsExtension || (() => (noop: any) => noop);

export default function configureStore (initialState = {initial: {count: 0}}) {
    const middlewares = [];

    if (process.env.NODE_ENV === 'local' || process.env.NODE_ENV === 'development') {
        middlewares.push(freeze)
    }

    const enhancers = [
        applyMiddleware(...middlewares),
        devtools(),
    ]

    const store: IStore = {
        ...createStore<IState>(
            createReducer({}),
            initialState,
            compose(...enhancers),
        ),
        asyncReducers: {},
    }

    return store;
}
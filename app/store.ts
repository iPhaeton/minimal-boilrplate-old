import {createStore, compose, applyMiddleware, Store, Reducer} from 'redux';
import createReducer from './reducer';
import freeze from 'redux-freeze';
import {IStore} from "types/redux";

declare const window: Window & {
    devToolsExtension: any,
};

const devtools = window.devToolsExtension || (() => (noop: any) => noop);

export default function configureStore (initialState = {}) {
    const middlewares = [];

    if (process.env.NODE_ENV === 'local' || process.env.NODE_ENV === 'development') {
        middlewares.push(freeze)
    }

    const enhancers = [
        applyMiddleware(...middlewares),
        devtools(),
    ]

    const store: IStore = {
        ...createStore(
            createReducer({}),
            initialState,
            compose(...enhancers),
        ),
        asyncReducers: {},
    }

    return store;
}
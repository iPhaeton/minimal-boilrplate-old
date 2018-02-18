import {createStore, compose, applyMiddleware, Store} from 'redux';
import createReducer from './reducer';
import freeze from 'redux-freeze';

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

    const store: any = createStore(//todo: do not use any
        createReducer({}),
        initialState,
        compose(...enhancers),
    );

    store.asyncReducers = {}

    return store;
}
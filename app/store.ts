import {createStore, compose} from 'redux';
import createReducer from './reducer';

declare const window: Window & {
    devToolsExtension: any,
};

const devtools = window.devToolsExtension || (() => (noop: any) => noop);

export default function configureStore (initialState = {}) {
    const enhancers = [
        devtools(),
    ]

    const store = createStore(
        createReducer(),
        initialState,
        compose(...enhancers),
    );

    return store;
}
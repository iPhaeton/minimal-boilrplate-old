import createReducer from '../reducer';

export default function injectReducers (store, reducers) {
    const names = Object.keys(reducers);

    names.forEach(name => !store.asyncReducers[name] ? store.asyncReducers[name] = reducers[name] : null)
    store.replaceReducer(createReducer(store.asyncReducers))
}
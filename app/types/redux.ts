import {Store, Reducer} from 'redux';

export interface IStore extends Store<any> {
    asyncReducers: {
        [key: string]: Reducer<any>;
    };
}

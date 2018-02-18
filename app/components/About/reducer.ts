import {IAboutState} from "types/states";
const initialState = {
    count: 0,
}

export default (state: IAboutState) => {//todo: do not use any for state
    return state || initialState;
}
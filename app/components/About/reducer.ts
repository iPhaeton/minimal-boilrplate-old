const initialState = {
    count: 0,
}

export default (state: any) => {//todo: do not use any for state
    return state || initialState;
}
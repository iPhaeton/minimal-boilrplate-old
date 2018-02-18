export interface IAboutState {
    count: number;
}

export interface IInitialState {
    count: number;
}

export interface IState {
    initial: IInitialState;
    about?: IAboutState;
}
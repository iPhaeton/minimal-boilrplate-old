import * as React from 'react';

interface ILoadableState {
    Component: new() => React.Component<any, any> | null;
}

export default (path: string) => {
    return class Loadable extends React.Component<any, ILoadableState> {
        constructor(props: any) {
            super(props);
            this.state = {Component: null};
        }

        async componentWillMount() {
            const Component = await import(path);
            this.setState({Component});
        }

        render() {
            const {Component} = this.state;
            return Component ? <Component {...this.props} /> : null;
        }
    }
}
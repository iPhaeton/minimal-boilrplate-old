import * as React from 'react';

interface ILoadableState {
    Component: any;
}

export default (path: string) => {
    return class Loadable extends React.Component<any, ILoadableState> {
        constructor(props: any) {
            super(props);
            this.state = {Component: null};
        }

        async componentWillMount() {
            const Component = await import(`../../${path}/index`);
            this.setState({Component: Component.default});
        }

        render() {
            const {Component} = this.state;
            return Component ? <Component {...this.props} /> : null;
        }
    }
}
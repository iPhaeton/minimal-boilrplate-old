import * as React from 'react';
import * as PropTypes from 'prop-types';

interface ILoadableState {
    Component: any;
}

export default (path: string) => {
    return class Loadable extends React.Component<any, ILoadableState> {
        static contextTypes = {
            store: PropTypes.object.isRequired,
        };

        constructor(props: any) {
            super(props);
            this.state = {Component: null};
        }

        async componentWillMount() {
            const Component = await import(`../../components/${path}`);
            this.setState({Component: Component.default});
        }

        render() {
            const {Component} = this.state;
            return Component ? <Component {...this.props} /> : null;
        }
    }
}
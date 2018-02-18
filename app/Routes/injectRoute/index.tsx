import * as React from 'react';
import * as PropTypes from 'prop-types';
import injectReducers from 'utils/injectReducers';

interface ILoadableState {
    //todo ger rid of any
    Component: any;
}

export default (path: string, reducers?: any) => {
    return class Loadable extends React.Component<any, ILoadableState> {
        static contextTypes = {
            store: PropTypes.object.isRequired,
        };

        constructor(props: any) {
            super(props);
            this.state = {Component: null};
        }

        importReducers = async () => {
            const reducerNames = Object.keys(reducers);

            const importedReducers = await Promise.all(
                reducerNames.map(name => import(`../../components/${reducers[name]}`))
            );

            return reducerNames.reduce((reducers, name, index) => ({
                ...reducers,
                [name]: importedReducers[index].default,
            }), {});
        }

        async componentWillMount() {
            if(reducers) {
                const reducersToInject = await this.importReducers();
                injectReducers(this.context.store, reducersToInject);
            }

            const Component = await import(`../../components/${path}`);
            this.setState({Component: Component.default});
        }

        render() {
            const {Component} = this.state;
            return Component ? <Component {...this.props} /> : null;
        }
    }
}
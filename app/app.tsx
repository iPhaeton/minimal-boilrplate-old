import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from 'Routes';

declare const module: {
    hot: any,
};

ReactDOM.render(
    <Router>
        <Routes/>
    </Router>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept();
}

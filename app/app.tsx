import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from 'components/Home';
import About from 'components/About';

declare const module: {
    hot: any,
};

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
        </div>
    </Router>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept();
}

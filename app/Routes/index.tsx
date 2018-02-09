import * as React from 'react';
import Home from 'components/Home';
import {Route} from 'react-router-dom';
import loadable from 'Routes/loadable';

export default () => {
    return (
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={loadable('components/About')}/>
        </div>
    );
}
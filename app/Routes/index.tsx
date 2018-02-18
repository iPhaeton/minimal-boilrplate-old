import * as React from 'react';
import Home from 'components/Home';
import {Route} from 'react-router-dom';
import injectRoute from 'Routes/injectRote';

export default () => {
    return (
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={injectRoute('About/index', {about: 'About/reducer'})}/>
        </div>
    );
}
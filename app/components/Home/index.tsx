import * as React from 'react';
import {Link} from 'react-router-dom';

export default () => {
    return (
        <div>
            <div>This is DB Editor</div>
            <Link to={'/about'}>About</Link>
        </div>
    )
}
import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare const module: {
    hot: any,
};

ReactDOM.render(
    <div>
        DB Editor!!!
    </div>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept();
}

import React from 'react';
import { Provider} from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app'



// import FashionOn from './FashionOn';

const Root = ({store}) => (
    <Provider store={store}>
        <App />
    </Provider>
)

export default Root;
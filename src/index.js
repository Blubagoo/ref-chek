import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

const mtgApp = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, mtgApp);
registerServiceWorker();



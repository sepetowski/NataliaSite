import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { AppStoreProvider } from './store/AppStoreProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<AppStoreProvider>
				<App />
			</AppStoreProvider>
		</BrowserRouter>
	</React.StrictMode>
);

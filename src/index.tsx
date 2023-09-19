// import React from "react";
// import ReactDOM from "react-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

// serviceWorkerRegistration.register();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
serviceWorkerRegistration.register();

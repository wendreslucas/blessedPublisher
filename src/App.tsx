import React, { Fragment, Suspense, lazy } from 'react';
import {
	ThemeProvider,
	StyledEngineProvider,
	CssBaseline,
} from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import theme from './theme';
import GlobalStyles from './GlobalStyles';
import Pace from './shared/components/Pace';
import WhatsAppButton from './logged_out/components/whatsapp-button';

const LoggedInComponent = lazy(() => import('./logged_in/components/Main'));
const LoggedOutComponent = lazy(() => import('./logged_out/components/Main'));

function App() {
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<GlobalStyles />
				<Pace color={theme.palette.primary.light} />
				<Suspense fallback={<Fragment />}>
					<Routes>
						<Route path="/c" element={<LoggedInComponent />} />
						<Route
							path="/"
							element={
								<Fragment>
									<LoggedOutComponent />
									<WhatsAppButton phoneNumber="seu-número-de-telefone-aqui" />
								</Fragment>
							}
						/>
					</Routes>
				</Suspense>
			</ThemeProvider>
		</StyledEngineProvider>
	);
}

export default App;

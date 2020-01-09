import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from '@material-ui/styles/ThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../mui-theme';
import AppRouter from './AuthAppRouter';
import ErrorBoundary from '../common/ErrorBoundary';

function AppWrapper() {
	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<ErrorBoundary>
				<AppRouter />
			</ErrorBoundary>
		</MuiThemeProvider>
	);
}

const root = document.getElementById('react-root');
if (!root) throw new Error('Could not find react dom root');
ReactDOM.render(<AppWrapper />, root);

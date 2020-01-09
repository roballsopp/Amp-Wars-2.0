import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Login from './Login';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
	},
	content: {
		flex: 1,
		display: 'flex',
	},
});

const AUTH_APP_BASENAME = 'auth';

export default function AuthAppRouter() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<main className={classes.content}>
				<Router basename={AUTH_APP_BASENAME}>
					<Redirect from="/" to="/login" />
					<Route path="/login" exact component={Login} />
				</Router>
			</main>
			{/* footer */}
		</div>
	);
}

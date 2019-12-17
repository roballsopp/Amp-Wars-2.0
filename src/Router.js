import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Footer from './Footer';
import Splash from './Splash';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100%',
	},
	content: {
		flex: 1,
		display: 'flex',
	},
});

export default function AppRouter() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<main className={classes.content}>
				<Router>
					<Route path="/" exact component={Splash} />
				</Router>
			</main>
			<Footer />
		</div>
	);
}

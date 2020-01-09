import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Footer from '../Footer';
import Home from '../Home';
import Contribute from '../Contribute';

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

export default function SecureAppRouter() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<main className={classes.content}>
				<Router>
					<Route path="/" exact component={Home} />
					<Route path="/contribute" exact component={Contribute} />
				</Router>
			</main>
			<Footer />
		</div>
	);
}

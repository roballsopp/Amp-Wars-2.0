import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/styles';
import Button from '../common/Button';
import { login } from '../services/rest-api.service';
import { getSavedUrl } from '../storage.service';

const useStyles = makeStyles(theme => ({
	root: {
		flex: 1,
		backgroundImage: `radial-gradient(circle, ${theme.palette.primary.light}, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
	},
}));

export default function Login() {
	const theme = useTheme();
	const classes = useStyles();

	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const handleLogin = async () => {
		await login(email, password);
		const previousUrl = getSavedUrl();
		if (previousUrl) window.location.href = previousUrl;
		else window.location.href = window.location.origin;
	};

	return (
		<Box height="100%" display="flex" flex={1} alignItems="center" justifyContent="center">
			<Box width="400px" display="flex" flexDirection="column" boxShadow={3} p={2}>
				<Typography gutterBottom>Please Login:</Typography>
				<TextField
					margin="normal"
					label="Email"
					type="email"
					variant="outlined"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<TextField
					margin="normal"
					label="Password"
					type="password"
					autoComplete="current-password"
					variant="outlined"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<Box display="flex" justifyContent="flex-end">
					<Button variant="contained" color="primary" size="large" onClick={handleLogin}>
						Login
					</Button>
				</Box>
			</Box>
		</Box>
	);
}

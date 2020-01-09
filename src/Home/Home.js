import React from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '../common/Button';

export default function Home() {
	const history = useHistory();

	return (
		<div>
			<Typography variant="h2">Amp Wars!</Typography>
			<Button variant="contained" color="secondary" onClick={() => history.push('/rankings')}>
				Rankings
			</Button>
			{/* TODO: browser feature check to make sure contributing can happen */}
			<Button variant="contained" color="secondary" onClick={() => history.push('/contribute')}>
				Contribute
			</Button>
		</div>
	);
}

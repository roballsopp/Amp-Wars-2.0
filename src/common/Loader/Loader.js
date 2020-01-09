import * as React from 'react';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loader(props) {
	return (
		<Box height="100%" display="flex" alignItems="center" justifyContent="center">
			<CircularProgress {...props} />
		</Box>
	);
}

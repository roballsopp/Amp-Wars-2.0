import React from 'react';
import download from 'downloadjs';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Button from '../common/Button';
import { DiURL } from '../config';

const useStyles = makeStyles(() => ({
	content: {
		maxWidth: 1024,
		margin: 'auto',
	},
}));

export default function Contribute() {
	const classes = useStyles();

	const handleDIDownload = () => {
		download(DiURL, 'amp_wars_DI.zip', 'application/zip');
	};

	return (
		<Container component="section" maxWidth="lg">
			<Typography variant="h6" gutterBottom>
				Thanks for contributing! Follow the steps below carefully. It&apos;s for science!
			</Typography>
			<Grid container spacing={6}>
				<Grid item sm={6}>
					<Box height="100%" display="flex" flexDirection="column">
						<Box flex={1}>
							<Typography variant="h2" gutterBottom>
								Step 1
							</Typography>

							<Typography paragraph>
								The link below contains guitar DIs recorded at a sample rate of 44.1k and a bit depth of 24. Your
								mission, should you choose to accept it, is to reamp these DIs through your <strong>AMP ONLY</strong>.{' '}
								<strong>This means you must bypass your cab and record the direct signal from your amp</strong>. This
								can safely be accomplished by <strong>leaving your cab connected to your amp</strong> and recording from
								the effects send of your amp.
							</Typography>

							<Typography paragraph>
								<strong>
									A boost has been applied to the DIs. Do not apply any additional boost/tube screamer/overdrive or
									effects of any kind
								</strong>
								.
							</Typography>
						</Box>
						<Box pb={2}>
							<Button size="large" variant="contained" color="secondary" onClick={handleDIDownload}>
								Download the DIs
							</Button>
						</Box>
					</Box>
				</Grid>
				<Grid item sm={6}>
					<Box height="100%" display="flex" flexDirection="column">
						<Box flex={1}>
							<Typography variant="h2" gutterBottom>
								Step 2
							</Typography>
							<Typography paragraph>
								Now that you&apos;ve done your reamping and you have the audio files, upload your file by clicking the
								button below. Amp Warz will then apply a cabinet impulse to your signal so it sounds like it should. In
								this way, Amp Warz is able to eliminate differences in playing, cabinet selection, and mic technique so
								that all voting is based solely on the sound of the AMP.
							</Typography>
							<Typography variant="h4" gutterBottom>
								Upload Requirements:
							</Typography>

							<Typography component="span">
								<ul>
									<li>
										You must upload one <strong>stereo</strong> wav file.
									</li>
									<li>You must pan the left guitar 100% left, and the right guitar 100% right.</li>
									<li>The sample rate of your file must be 44.1k.</li>
								</ul>
							</Typography>
						</Box>
						<Box pb={2}>
							<Button size="large" variant="contained" color="secondary" onClick={() => history.push('/contribute')}>
								I Am Ready To Upload
							</Button>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
}

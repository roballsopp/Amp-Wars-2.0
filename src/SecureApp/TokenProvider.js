import React from 'react';
import PropTypes from 'prop-types';
import urlJoin from 'url-join';
import { UnauthenticatedError } from '../errors';
import { getToken, getTokenExpiration, saveCurrentUrl } from '../storage.service';
import { Loader } from '../common/Loader';

export const TokenContext = React.createContext({
	token: null,
	expires: null,
});

export class TokenProvider extends React.Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
	};

	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			token: null,
			expiration: null,
		};
	}

	static getDerivedStateFromError(error) {
		if (error instanceof UnauthenticatedError) {
			return { loading: true };
		}
	}

	componentDidMount() {
		// TODO: look for new token in url
		const token = getToken();
		const expiration = getTokenExpiration();

		if (!token || !expiration || new Date(expiration) < new Date()) {
			this.goToLogin();
		} else {
			this.setState({ token, expiration, loading: false });
		}
	}

	componentDidCatch(error) {
		if (error instanceof UnauthenticatedError) {
			return this.goToLogin();
		}
		throw error;
	}

	goToLogin() {
		saveCurrentUrl();
		window.location.href = urlJoin(window.location.origin, 'auth');
	}

	render() {
		const { children } = this.props;
		const { token, expiration, loading } = this.state;
		return (
			<TokenContext.Provider value={{ token, expiration }}>
				{loading ? <Loader variant="indeterminate" /> : children}
			</TokenContext.Provider>
		);
	}
}

export const useToken = () => {
	const { token, expiration } = React.useContext(TokenContext);
	if (!token || !expiration || new Date(expiration) < new Date()) {
		throw new UnauthenticatedError('Missing or expired token');
	}
	return { token, expiration };
};

import jwtDecode from 'jwt-decode';
import { ApiURL } from '../config';
import { UnauthenticatedError } from '../errors';
import { setToken, setTokenExpiration } from '../storage.service';

export const createStripeSession = async ({ name, description, amount }) => {
	const resp = await fetch(`${ApiURL}/stripe/session`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ name, description, amount, returnUrl: location.href }),
	});

	if (resp.ok) return await resp.json();
	throw new Error(resp.statusText);
};

export const login = async (email, password) => {
	const resp = await fetch(`${ApiURL}/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email, password }),
	});

	if (resp.ok) {
		const { token } = await resp.json();
		const decodedToken = jwtDecode(token);
		setToken(token);
		setTokenExpiration(decodedToken.exp * 1000 + Date.now());
	}
	throw new UnauthenticatedError(resp.statusText);
};

import { ApiURL } from '../config';

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

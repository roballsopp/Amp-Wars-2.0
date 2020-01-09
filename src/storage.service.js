const TOKEN_STORAGE_KEY = 'id_token';
const EXPIRATION_STORAGE_KEY = 'expires_at';

export const setToken = token => {
	return localStorage.setItem(TOKEN_STORAGE_KEY, token);
};

export const getToken = () => {
	return localStorage.getItem(TOKEN_STORAGE_KEY);
};

export const setTokenExpiration = expiration => {
	return localStorage.setItem(EXPIRATION_STORAGE_KEY, JSON.stringify(expiration));
};

export const getTokenExpiration = () => {
	return localStorage.getItem(EXPIRATION_STORAGE_KEY);
};

export const destroySession = () => {
	localStorage.removeItem(TOKEN_STORAGE_KEY);
	localStorage.removeItem(EXPIRATION_STORAGE_KEY);
};

const REDIRECT_URL_STORAGE_KEY = 'redirect_to';

export const saveCurrentUrl = () => {
	return localStorage.setItem(REDIRECT_URL_STORAGE_KEY, window.location.href);
};

export const getSavedUrl = () => {
	return localStorage.getItem(REDIRECT_URL_STORAGE_KEY);
};

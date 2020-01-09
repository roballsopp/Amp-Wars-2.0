// throw when someone's token is bad, missing, or they try to access something without being logged in
// 401
export class UnauthenticatedError extends Error {
	constructor(m = 'Unauthenticated') {
		super(m);
		this.name = 'UnauthenticatedError';
	}
}

// throw when someone is logged in, but they just aren't allowed to do what they are trying to do or go where they are trying to go
// 403
export class ForbiddenError extends Error {
	constructor(m = 'Forbidden') {
		super(m);
		this.name = 'ForbiddenError';
	}
}

export class UnauthorizedRequestError extends Error {
	constructor(message = "You are not authorized to access this resource") {
		super(message)
		this.name = "UnauthorizedRequestError"
	}
}

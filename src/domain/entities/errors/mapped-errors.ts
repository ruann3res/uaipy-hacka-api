export class AuthenticationError extends Error {
    public errorDetails?: unknown;
    constructor(details?: unknown) {
        super('GLOBAL.ERRORS.AUTHENTICATION_FAILED');
        this.name = 'AuthenticationError';
        this.errorDetails = details;
    }
}
export class BadRequestError extends Error {
    public errorDetails?: unknown;
    constructor(message: string, details?: unknown) {
        super(message);
        this.name = 'BadRequestError';
        this.errorDetails = details;
    }
}
export class DataAlreadyExistsError extends Error {
    public errorDetails?: unknown;
    constructor(message: string, details?: unknown) {
        super(message);
        this.name = 'DataAlreadyExistsError';
        this.errorDetails = details;
    }
}
export class NoDataFoundError extends Error {
    public errorDetails?: unknown;
    constructor(message: string, details?: unknown) {
        super(message);
        this.name = 'NoDataFoundError';
        this.errorDetails = details;
    }
}
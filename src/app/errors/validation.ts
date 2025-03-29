export class RequiredFieldError extends Error {
    constructor(fieldName?: string) {
        const globalRequired = 'BACKEND_ERRORS.VALIDATION.REQUIRED_FIELD';
        const message = !fieldName ? `${globalRequired}.ANY` : `${globalRequired}.${fieldName.toUpperCase()}`;
        super(message);
        this.name = 'RequiredFieldError';
    }
}

export class RequiredEmailError extends Error {
    constructor() {
        super('BACKEND_ERRORS.VALIDATION.INVALID_EMAIL');
        this.name = 'RequiredEmailError';
    }
}

export class RequiredCPFError extends Error {
    constructor() {
        super('BACKEND_ERRORS.VALIDATION.INVALID_CPF');
        this.name = 'RequiredCPFError';
    }
}

export class RequiredEnumError extends Error {
    constructor() {
        super('BACKEND_ERRORS.VALIDATION.INVALID_ENUM_VALUE');
        this.name = 'RequiredEnumError';
    }
}

export class InvalidFileError extends Error {
    constructor() {
        super('BACKEND_ERRORS.VALIDATION.INVALID_FILE');
        this.name = 'InvalidFileError';
    }
}

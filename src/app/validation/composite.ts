/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Validator } from '@/app/validation';

export class ValidationComposite implements Validator {
    constructor(private readonly validators: Validator[]) { }
    validate(): Error | undefined {
        for (const validator of this.validators) {
            const error = validator.validate();
            if (error !== undefined) return error;
        }
        return undefined;
    }
}
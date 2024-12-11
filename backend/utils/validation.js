import * as yup from 'yup';

export const useAuthValidationSchema = () => yup.object({
    username: yup.string().required().label('Username'),
    password: yup.string().required().label('Password'),
});

export class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}
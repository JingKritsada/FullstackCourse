import jwt from 'jsonwebtoken';
import { useAuthValidationSchema, ValidationError } from '#app/utils/validation';

export default ({ }, config) => {
    const validateSchema = useAuthValidationSchema();

    async function login(username, password) {
        const auth = await validateSchema.validate({
            username,
            password,
        });

        const token = jwt.sign({
            user: {
                id: '1234', username: 'john'
            },
        }, config.secret, { algorithm: config.algorithms[0] });

        return {
            token,
            status: true,
        };
    }

    async function register(username, password) {
        const auth = await validateSchema.validate({
            username,
            password,
        });

        return true;
    }

    return {
        login,
        register,
    }
}
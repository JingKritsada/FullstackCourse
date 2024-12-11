import useAuthService from '#app/services/auth';

export default ({ }, config) => {
    const authService = useAuthService({}, config.jwt);

    return {
        authService,
    }
}
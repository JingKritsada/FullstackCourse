import useAuthService from '#app/services/auth';
import useProfileService from '#app/services/profile';

export default ({ }, config) => {
    const authService = useAuthService({}, config.jwt);
    const profileService = useProfileService({});

    return {
        authService,
        profileService,
    }
}
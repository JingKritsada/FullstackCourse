import useAuthService from '#app/services/auth';
import useProfileService from '#app/services/profile';
import usePortfolioService from '#app/services/portfolio';

export default ({ }, config) => {
    const authService = useAuthService({}, config.jwt);
    const profileService = useProfileService({});
    const portfolioService = usePortfolioService({});

    return {
        authService,
        profileService,
        portfolioService,
    }
}
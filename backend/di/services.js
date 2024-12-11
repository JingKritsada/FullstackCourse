import useAuthService from '#app/services/auth';
import useProfileService from '#app/services/profile';
import usePortfolioService from '#app/services/portfolio';

export default ({
    userRepo,
    profileRepo,
    portfolioRepo,
}, config) => {
    const authService = useAuthService({ userRepo }, config.jwt);
    const profileService = useProfileService({ profileRepo });
    const portfolioService = usePortfolioService({ portfolioRepo});

    return {
        authService,
        profileService,
        portfolioService,
    }
}
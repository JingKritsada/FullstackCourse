import useHttpServer from '#app/servers/http/index'

export default ({
    authService,
    profileService,
    portfolioService,
}, config) => {
    const httpServer = useHttpServer({
        authService,
        profileService,
        portfolioService,
    }, config);

    function run() {
        httpServer.run();
    }

    return {
        run,
    }
}
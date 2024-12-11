import useHttpServer from '#app/servers/http/index'

export default ({
    authService,
    profileService,
}, config) => {
    const httpServer = useHttpServer({ authService, profileService }, config);

    function run() {
        httpServer.run();
    }

    return {
        run,
    }
}
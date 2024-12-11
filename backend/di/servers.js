import useHttpServer from '#app/servers/http/index'

export default ({ authService }, config) => {
    const httpServer = useHttpServer({ authService }, config);

    function run() {
        httpServer.run();
    }

    return {
        run,
    }
}
import useHttpServer from '#app/servers/http/index'

export default ({ }, config) => {
    const httpServer = useHttpServer({}, config);

    function run() {
        httpServer.run();
    }

    return {
        run,
    }
}
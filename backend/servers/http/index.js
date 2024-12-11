import express from 'express';
import cors from 'cors';
import useAuthHandlers from '#app/servers/http/handlers/auth';
import { errorHandler } from '#app/servers/http/middlewares/errors';

export default ({ }, config) => {
    const app = express();
    const auth = useAuthHandlers({}, config.http);

    // ใช้แกะ body จาก request ที่ส่งมาเป็น json
    app.use(express.json());

    app.use(cors(config.http.cors));
    app.use('/v1/auth', auth.router());
    app.use(errorHandler);

    function run() {
        app.listen(config.http.port, () => {
            console.log(`The server is running on port ${config.http.port}`);
        });
    }

    return {
        run,
    };
};

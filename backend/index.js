import 'dotenv/config';
import useServers from '#app/di/servers';
import useServices from '#app/di/services';

const {
    authService,
    profileService,
    portfolioService,
} = useServices({}, {
    jwt: {
        secret: process.env.JWT_SECRET,
        algorithms: process.env.JWT_ALGORITHMS.split(','),
    },
});

const servers = useServers({
    authService,
    profileService,
    portfolioService,
}, {
    http: {
        port: process.env.APP_PORT,
        jwt: {
            secret: process.env.JWT_SECRET,
            algorithms: process.env.JWT_ALGORITHMS.split(','),
        },
        cors: {
            origin: process.env.CORS_ORIGIN,
        },
    },
});

servers.run();
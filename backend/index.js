import 'dotenv/config';
import useServers from '#app/di/servers';
import useServices from '#app/di/services';
import useRepos from '#app/di/repositories';

const {
    userRepo,
    profileRepo,
    // TODO: 1. get portfolio repo
    // portfolioRepo,
} = useRepos({
    db: {
        mongo: {
            uri: process.env.MONGO_URI,
        }
    }
});

const {
    authService,
    profileService,
    portfolioService,
} = useServices({
    userRepo,
    profileRepo,
    // TODO: 2. inject portfolio repo
    // portfolioRepo,
}, {
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
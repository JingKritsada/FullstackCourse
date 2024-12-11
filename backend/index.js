import 'dotenv/config';
import useServers from '#app/di/servers';

const servers = useServers({}, {
    http: {
        port: process.env.APP_PORT,
        // jwt คือหลักการในการ encrypt token
        jwt: {
            secret: process.env.JWT_SECRET,
            algorithms: process.env.JWT_ALGORITHMS.split(','),
        },
        // cors = cross origin resource sharing
        // คือการกำหนดว่าเราอนุญาตให้ domain ไหนเข้ามาใช้งาน api ของเราได้บ้าง
        cors: {
            origin: process.env.CORS_ORIGIN,
        },
    },
});

servers.run();
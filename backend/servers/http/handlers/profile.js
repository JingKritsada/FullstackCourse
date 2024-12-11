import express from 'express';
import asyncHandler from 'express-async-handler';
import { useJwt } from '#app/servers/http/middlewares/jwt'

export default ({ profileService }, config) => {

    function router() {
        const router = express.Router()

        router.get('/', asyncHandler(getProfile));
        router.patch('/', useJwt(config.jwt), asyncHandler(updateProfile));

        return router;
    }

    async function getProfile(_, res) {
        const profile = await profileService.getProfile();

        res.status(200).json({ data: profile });
    }

    async function updateProfile(req, res) {
        const profile = await profileService.updateProfile(req.body);

        res.status(200).json({ status: true, id: profile.id, });
    }

    return {
        router,
    }
}
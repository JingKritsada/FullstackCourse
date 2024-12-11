import express from 'express';
import asyncHandler from 'express-async-handler';

export default ({ }, config) => {
    function router() {
        const router = express.Router();

        // asyncHandler คือ middleware ที่จะทำการจัดการ error ให้เรา
        router.post('/login', asyncHandler(login));
        router.post('/register', asyncHandler(register));

        return router;
    }

    async function login(req, res) {
        res.status(200).json({
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlBpY2hldCBJdG5nYW0iLCJpYXQiOjE1MTYyMzkwMjJ9.mVMnU3cgNFO27o_i1xxiYptVpa3ruv1H_mKJD3qzfj0',
            status: true,
        });
    }

    async function register(req, res) {
        res.status(200).json({
            status: true,
        });
    }

    return {
        router,
    }
};
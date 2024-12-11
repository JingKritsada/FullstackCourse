import express from 'express';
import asyncHandler from 'express-async-handler';
import { useJwt } from '#app/servers/http/middlewares/jwt'

export default ({ }, config) => {
    function router() {
        const router = express.Router()

        router.get('/', asyncHandler(getPortfolios));
        router.post('/', useJwt(config.jwt), asyncHandler(createPortfolio));
        router.get('/:id', asyncHandler(getPortfolio));
        router.put('/:id', useJwt(config.jwt), asyncHandler(updatePortfolio));
        router.delete('/:id', useJwt(config.jwt), asyncHandler(deletePortfolio));

        return router;
    }

    async function getPortfolios(req, res) {
        res.status(200).json({
            data: [
                {
                    id: "string",
                    cover: "string",
                    images: [
                        "string"
                    ],
                    skills: [
                        "string"
                    ],
                    title: "string",
                    content: "string",
                    excerpt: "string",
                    publishedAt: "string"
                }
            ],
        });
    }

    async function getPortfolio(req, res) {
        res.status(200).json({
            data: {
                id: "string",
                cover: "string",
                images: [
                    "string"
                ],
                skills: [
                    "string"
                ],
                title: "string",
                content: "string",
                excerpt: "string",
                publishedAt: "string"
            },
        });
    }

    async function createPortfolio(req, res) {
        res.status(200).json({
            status: true,
        });
    }

    async function updatePortfolio(req, res) {
        res.status(200).json({
            status: true,
        });
    }

    async function deletePortfolio(req, res) {
        res.status(200).json({
            status: true,
        });
    }

    return {
        router,
    }
}
import express from 'express';
import asyncHandler from 'express-async-handler';
import { useJwt } from '#app/servers/http/middlewares/jwt'

export default ({
    portfolioService,
}, config) => {

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
        const query = req.query;

        const portfolios = await portfolioService.getPortfolios(query.page, query.limit);

        res.status(200).json({
            data: portfolios,
        });
    }

    async function getPortfolio(req, res) {
        const params = req.params;

        const portfolio = await portfolioService.getPortfolio(params.id);

        res.status(200).json({
            data: portfolio,
        });
    }

    async function createPortfolio(req, res) {
        const body = req.body;

        const portfolio = await portfolioService.createPortfolio(body);

        res.status(200).json({
            status: (portfolio) ? true : false,
        });
    }

    async function updatePortfolio(req, res) {
        const params = req.params;
        const body = req.body;

        const portfolio = await portfolioService.updatePortfolio(params.id, body);

        res.status(200).json({
            status: (portfolio) ? true : false,
        });
    }

    async function deletePortfolio(req, res) {
        const params = req.params;

        const result = await portfolioService.deletePortfolio(params.id);

        res.status(200).json({
            status: result,
        });
    }

    return {
        router,
    }
}
import { usePortfolioValidationSchema, useIdValidationSchema } from '#app/utils/validation';

export default ({ }) => {
    const validateSchema = usePortfolioValidationSchema();
    const idValidationSchema = useIdValidationSchema();

    function sanitizePortfolio(portfolio) {
        return {
            cover: portfolio.cover,
            images: portfolio.images,
            title: portfolio.title,
            content: portfolio.content,
            skills: portfolio.skills,
            publishedAt: portfolio.publishedAt,
        }
    }

    async function getPortfolios(page, limit) {
        let portfolios = [];

        const sanitizedPage = Math.max(page, 1);
        const sanitizedLimit = Math.min(limit, 10);
        const offset = (sanitizedPage - 1) * sanitizedLimit;

        return portfolios;
    }

    async function getPortfolio(id) {
        const validatedId = await idValidationSchema.validate(id);

        return portfolio;
    }

    async function createPortfolio(draftedPortfolio) {
        const validatedPortfolio = await validateSchema.validate(draftedPortfolio);

        const sanitizedPortfolio = sanitizePortfolio(validatedPortfolio);


        return portfolio;
    }

    async function updatePortfolio(id, draftedPortfolio) {
        const validatedPortfolio = await validateSchema.validate(draftedPortfolio);
        const validatedId = await idValidationSchema.validate(id);

        const sanitizedPortfolio = sanitizePortfolio(validatedPortfolio);

        return portfolio;
    }

    async function deletePortfolio(id) {

        const validatedId = await idValidationSchema.validate(id);

        return result;
    }

    return {
        getPortfolios,
        getPortfolio,
        createPortfolio,
        updatePortfolio,
        deletePortfolio,
    };
}
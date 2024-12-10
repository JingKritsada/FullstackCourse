import { defineStore } from 'pinia';
import { useAuthStore } from './auth';
import { getPortfolioAPI, savePortfolioAPI, createPortfolioAPI, deletePortfolioAPI } from '@/repositories/portfolio';
import moment from 'moment';

export const usePortfolioStore = defineStore('portfolio', () => {
    const portfolio = ref(newPortfolio());
    const editMode = ref(false);

    function newPortfolio() {
        return {
            cover: '',
            images: [],
            title: '',
            content: '',
            excerpt: '',
            skills: [],
            publishedAt: moment().toISOString(),
        };
    }

    async function getPortfolio(id) {
        try {
            const { data: response, error, status } = await getPortfolioAPI(id);
            if (status == 'error') {
                throw new Error(error);
            }

            portfolio.value = response.value;
        } catch (error) {
            throw new Error(error);
        }
    }

    async function createPortfolio(draftedPortfolio) {
        const authStore = useAuthStore();

        try {
            const { data: response, error, status } = await createPortfolioAPI(draftedPortfolio, authStore.token);
            if (status == 'error') {
                throw new Error(error);
            }

            if (response.value.status) {
                portfolio.value = draftedPortfolio;

                editMode.value = false;

                navigateTo('/');
            }

        } catch (error) {
            throw new Error(error);
        }
    }

    async function savePortfolio(draftedPortfolio) {
        const authStore = useAuthStore();

        try {
            const { data: response, error, status } = await savePortfolioAPI(draftedPortfolio.id, draftedPortfolio, authStore.token);
            if (status == 'error') {
                throw new Error(error);
            }

            if (response.value.status) {
                portfolio.value = draftedPortfolio;

                editMode.value = false;
            }

        } catch (error) {
            throw new Error(error);
        }
    }

    async function deletePortfolio(id) {
        const authStore = useAuthStore();

        try {
            const { data: response, error, status } = await deletePortfolioAPI(id, authStore.token);
            if (status == 'error') {
                throw new Error(error);
            }

            if (response.value.status) {
                editMode.value = false;

                navigateTo('/');
            }

        } catch (error) {
            throw new Error(error);
        }
    }

    function enterEditMode() {
        editMode.value = true;
    }

    function enterViewMode() {
        editMode.value = false;
    }

    return {
        portfolio,
        editMode,
        getPortfolio,
        newPortfolio,
        createPortfolio,
        savePortfolio,
        deletePortfolio,
        enterEditMode,
        enterViewMode,
    }
})
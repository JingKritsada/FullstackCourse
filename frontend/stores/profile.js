import { defineStore } from 'pinia';
import { useAuthStore } from '@/stores/auth'
import { getProfileAPI, saveProfileAPI } from '@/repositories/profile';
import { getPortfoliosAPI } from '@/repositories/portfolio';

export const useProfileStore = defineStore('profile', () => {
    const profile = ref({
        overallSkills: [],
        experiences: [],
    });
    const portfolios = ref([])
    const isGettingPortfolios = ref(false);
    const hasMorePortfolios = ref(true);
    const skillsEditMode = ref(false);
    const experiencesEditMode = ref(false);
    const visibleExperiencesNumber = ref(2);

    const hasMoreExperiences = computed(() => {
        return visibleExperiencesNumber.value < profile.value.experiences.length;
    });

    async function getProfile() {
        try {
            const { data: response, error, status } = await getProfileAPI();
            if (status == 'error') {
                throw Error(error);
            }

            profile.value = response.value;
        } catch (error) {
            throw Error(error);
        }
    }

    async function getPortfolios(page, offset) {
        isGettingPortfolios.value = true;

        try {
            const { data: response, error, status } = await getPortfoliosAPI(page, offset);
            if (status == 'error') {
                throw Error(error);
            }

            if (response.value.length < offset) {
                hasMorePortfolios.value = false;
            }

            portfolios.value = response.value;
        } catch (error) {
            throw Error(error);
        } finally {
            isGettingPortfolios.value = false;
        }
    }

    async function saveSkills(draftedSkills) {
        const authStore = useAuthStore();

        try {
            const { data: response, error, status } = await saveProfileAPI(draftedSkills, authStore.token);
            if (status == 'error') {
                throw Error(error);
            }

            if (response.value.status) {
                skillsEditMode.value = false;

                profile.value.overallSkills = draftedSkills.skills;
            }

        } catch (error) {
            throw Error(error);
        }
    }

    async function saveExperiences(draftedExperiences) {
        const authStore = useAuthStore();

        try {
            const { data: response, error, status } = await saveProfileAPI(draftedExperiences, authStore.token);
            if (status == 'error') {
                throw Error(error);
            }

            if (response.value.status) {
                profile.value.experiences = draftedExperiences.experiences;

                experiencesEditMode.value = false;
            }

        } catch (error) {
            throw Error(error);
        }
    }

    function isExperienceVisible(index) {
        return index + 1 <= visibleExperiencesNumber.value
    }

    function increaseVisibleExperences(amount) {
        visibleExperiencesNumber.value = visibleExperiencesNumber.value + amount;
    }

    function enterSkillsEditMode() {
        skillsEditMode.value = true;
    }

    function enterSkillsViewMode() {
        skillsEditMode.value = false;
    }

    function enterExperiencesEditMode() {
        experiencesEditMode.value = true;
    }

    function enterExperiencesViewMode() {
        experiencesEditMode.value = false;
    }

    return {
        profile,
        skillsEditMode,
        experiencesEditMode,
        hasMoreExperiences,
        portfolios,
        isGettingPortfolios,
        hasMorePortfolios,
        getProfile,
        getPortfolios,
        saveSkills,
        saveExperiences,
        isExperienceVisible,
        increaseVisibleExperences,
        enterSkillsEditMode,
        enterSkillsViewMode,
        enterExperiencesEditMode,
        enterExperiencesViewMode,
    }
})
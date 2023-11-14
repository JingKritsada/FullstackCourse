import { defineStore } from 'pinia';
import { useAuthStore } from '@/stores/auth'
import { getProfileAPI, saveProfileAPI } from '@/repositories/profile';

export const useProfileStore = defineStore('profile', () => {
    const profile = ref({
        overallSkills: [],
        experiences: [],
    });

    const skillsEditMode = ref(false);
    // TODO: 1. edit mode
    const experiencesEditMode = ref(false);
    // TODO: 2. visible exp number
    const visibleExperiencesNumber = ref(2);

    // TODO: 3. hase more exps
    const hasMoreExperiences = computed(() => {
        return visibleExperiencesNumber.value < profile.value.experiences.length;
    });

    async function getProfile() {
        try {
            const { data: response, error, status } = await getProfileAPI();
            if (status == 'error') {
                throw new Error(error);
            }

            profile.value = response.value;
        } catch (error) {
            throw new Error(error);
        }
    }

    async function saveSkills(draftedSkills) {
        const authStore = useAuthStore();

        try {
            const { data: response, error, status } = await saveProfileAPI({ overallSkills: draftedSkills.skills }, authStore.token);
            if (status == 'error') {
                throw new Error(error);
            }

            if (response.value.status) {
                skillsEditMode.value = false;

                profile.value.overallSkills = draftedSkills.skills;
            }

        } catch (error) {
            throw new Error(error);
        }
    }

    // TODO: 4. save exp
    async function saveExperiences(draftedExperiences) {
        const authStore = useAuthStore();

        try {
            const { data: response, error, status } = await saveProfileAPI(draftedExperiences, authStore.token);
            if (status == 'error') {
                throw new Error(error);
            }

            if (response.value.status) {
                profile.value.experiences = draftedExperiences.experiences;

                experiencesEditMode.value = false;
            }

        } catch (error) {
            throw new Error(error);
        }
    }

    // TODO: 5. function to show
    function isExperienceVisible(index) {
        return index + 1 <= visibleExperiencesNumber.value
    }

    // TODO: 6. action to increase
    function increaseVisibleExperences(amount) {
        visibleExperiencesNumber.value = visibleExperiencesNumber.value + amount;
    }

    function enterSkillsEditMode() {
        skillsEditMode.value = true;
    }

    function enterSkillsViewMode() {
        skillsEditMode.value = false;
    }

    // TODO: 7. edit mode
    function enterExperiencesEditMode() {
        experiencesEditMode.value = true;
    }

    function enterExperiencesViewMode() {
        experiencesEditMode.value = false;
    }

    return {
        // TODO: 8. return new
        profile,
        visibleExperiencesNumber,
        hasMoreExperiences,
        skillsEditMode,
        experiencesEditMode,
        getProfile,
        saveSkills,
        enterSkillsEditMode,
        enterSkillsViewMode,
        saveExperiences,
        isExperienceVisible,
        increaseVisibleExperences,
        enterExperiencesEditMode,
        enterExperiencesViewMode
    }
})
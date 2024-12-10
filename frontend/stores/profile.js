import { defineStore } from 'pinia';
import { useAuthStore } from '@/stores/auth'
import { getProfileAPI, saveProfileAPI } from '@/repositories/profile';

export const useProfileStore = defineStore('profile', () => {
    const profile = ref({
        overallSkills: [],
        experiences: [],
    });

    const skillsEditMode = ref(false);

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

    function enterSkillsEditMode() {
        skillsEditMode.value = true;
    }

    function enterSkillsViewMode() {
        skillsEditMode.value = false;
    }

    return {
        profile,
        skillsEditMode,
        getProfile,
        saveSkills,
        enterSkillsEditMode,
        enterSkillsViewMode,
    }
})
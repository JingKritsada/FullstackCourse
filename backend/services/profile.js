import { useProfileValidationSchema } from '#app/utils/validation';

export default ({ }) => {
    const validateSchema = useProfileValidationSchema();

    function sanitizeProfile(profile) {
        const output = {};

        if (profile.overallSkills) {
            output.overallSkills = profile.overallSkills;
        }

        if (profile.experiences) {
            output.experiences = profile.experiences;
        }

        return output;
    }

    async function getProfile() {
        return {
            overallSkills: [],
            experiences: [],
        };
    }

    async function updateProfile(newProfile) {
        let id;

        const profile = await validateSchema.validate(newProfile);

        const sanitizedProfile = sanitizeProfile(profile);

        return {
            id: '1234',
        };
    }

    return {
        getProfile,
        updateProfile,
    };
}
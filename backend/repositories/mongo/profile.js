import { Schema } from 'mongoose';

export default (connection) => {
    const ProfileModel = connection.model('Profile', new Schema({
        overallSkills: [String],
        experiences: [
            {
                title: String,
                logo: String,
                company: String,
                type: {
                    type: String,
                },
                start: Date,
                end: Date,
                skills: [String],
                detail: String,
            }
        ]
    }));

    function toProfile(profile) {
        return {
            id: profile.id,
            overallSkills: profile.overallSkills,
            experiences: profile.experiences,
        }
    }

    async function getProfile() {
        let profile;

        try {
            profile = await ProfileModel.where({}).findOne();

            if (!profile) {
                return profile;
            }
        } catch (error) {
            throw new Error(error);
        }

        return toProfile(profile);
    }

    async function updateProfile(newProfile) {
        let profile;

        try {
            const update = {
                $set: newProfile,
            };

            profile = await ProfileModel.findOneAndUpdate({}, update, {
                new: true,
                upsert: true,
            });
        } catch (error) {
            throw new Error(error);
        }

        return toProfile(profile);
    }

    return {
        getProfile,
        updateProfile,
    };
}
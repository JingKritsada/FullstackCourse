<script setup>
import { useAuthStore } from '@/stores/auth';
import { useProfileStore } from '@/stores/profile';

const authStore = useAuthStore();
const store = useProfileStore();

useHead({
    title: 'Pichet Itngam\'s portfolios',
    meta: [
        { name: 'description', content: 'Pichet Itgnam\'s portfolios' },
    ],
})

// TODO: 10. remove experiences and isExperienceVisible
const experiences = [{
    "logo": "https://cdn-images-1.medium.com/v2/resize:fit:400/1*r5OuqrQCyLCf11ecU1ccjA@2x.png",
    "title": "Senior Engineering Manager",
    "company": "Senestia",
    "type": "fulltime",
    "start": "2023-08-01T00:00:00.000+07:00",
    "end": null,
    "skills": [
        "Management"
    ],
    "detail": "- Manage the 6-8 engineers"
}, {
    "logo": "https://cdn-images-1.medium.com/v2/resize:fit:400/1*r5OuqrQCyLCf11ecU1ccjA@2x.png",
    "title": "Senior Engineering Manager",
    "company": "Senestia",
    "type": "fulltime",
    "start": "2023-08-01T00:00:00.000+07:00",
    "end": null,
    "skills": [
        "Management"
    ],
    "detail": "- Manage the 6-8 engineers"
},];

const portfolios = [
    {
        "id": "507f191e810c19729de860ea",
        "cover": "https://cdn-images-1.medium.com/v2/resize:fit:400/1*r5OuqrQCyLCf11ecU1ccjA@2x.png",
        "images": [
            "https://cdn-images-1.medium.com/v2/resize:fit:400/1*r5OuqrQCyLCf11ecU1ccjA@2x.png"
        ],
        "skills": [
            "Management"
        ],
        "title": "Do something",
        "content": "Do something",
        "excerpt": "Do something",
        "publishedAt": "2023-08-01T00:00:00.000+07:00"
    }
];

await store.getProfile();
</script>

<template>
    <section class="mb-10">
        <BaseEditable :edit-mode="store.skillsEditMode">
            <template #view>
                <SkillList
                    :skills="store.profile.overallSkills"
                    :can-edit="authStore.canEdit"
                    @edit="store.enterSkillsEditMode"
                />
            </template>
            <template #edit>
                <SkillForm
                    :skills="store.profile.overallSkills"
                    @cancel="store.enterSkillsViewMode"
                    @submit="store.saveSkills"
                />
            </template>
        </BaseEditable>
    </section>
    <section class="mb-10">
        <BaseEditable :edit-mode="store.experiencesEditMode">
            <template #view>
                <ExperienceList
                    :experiences="store.profile.experiences"
                    :can-edit="authStore.canEdit"
                    :has-more-experiences="store.hasMoreExperiences"
                    :is-experience-visible="store.isExperienceVisible"
                    @edit="store.enterExperiencesEditMode"
                    @more="store.increaseVisibleExperences(2)"
                />
            </template>
            <template #edit>
                <ExperienceForm
                    :experiences="store.profile.experiences"
                    @cancel="store.enterExperiencesViewMode"
                    @submit="store.saveExperiences"
                />
            </template>
        </BaseEditable>
    </section>
    <section class="mb-10">
        <PortfolioList
            :portfolios="portfolios"
            :can-edit="true"
            :is-getting-portfolios="false"
            :has-more-portfolios="true"
            @more="console.log('clicked on more')"
        />
    </section>
</template>
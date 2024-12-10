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

function isExperienceVisible(index) {
    return true;
}

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
        <BaseEditable :edit-mode="true">
            <template #view?>
                <ExperienceList
                    :experiences="experiences"
                    :can-edit="true"
                    :has-more-experiences="true"
                    :is-experience-visible="isExperienceVisible"
                    @edit="console.log('clicked on edit')"
                    @more="console.log('cliked on more')"
                />
            </template>
            <template #edit>
                <ExperienceForm
                    :experiences="experiences"
                    @cancel="console.log('clicked on edit')"
                    @submit="console.log('clicked on save')"
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
<script setup>
import moment from 'moment';

defineProps({
    portfolio: Object,
    canEdit: Boolean,
})

defineEmits(['edit'])
</script>

<template>
    <div class="flex justify-between">
        <BaseLink
            variant="secondary"
            size="small"
            to="/"
        >
            Back
        </BaseLink>
        <BaseButton
            v-if="canEdit"
            size="small"
            variant="secondary"
            @click="$emit('edit')"
        >
            Edit
        </BaseButton>
    </div>
    <section class="mt-4">
        <BaseCarousel :items-to-show="1.5">
            <BaseSlide
                v-for="(image, index) in portfolio.images"
                :key="index"
            >
                <BaseImage
                    :url="image"
                    class="w-full min-h-[400px]"
                />
            </BaseSlide>

            <template #addons>
                <BaseNavigation />
                <BasePagination />
            </template>
        </BaseCarousel>
        <h1 class="font-bold text-xl my-4 md:text-2xl">
            {{ portfolio.title }}
        </h1>
        <div class="flex justify-between mb-4 items-center">
            <BaseBadgeList :badges="portfolio.skills" />
            <span>{{ moment(portfolio.publishedAt).format('MMM YYYY') }}</span>
        </div>
        <div class="whitespace-pre-wrap">
            {{ portfolio.content }}
        </div>
    </section>
</template>
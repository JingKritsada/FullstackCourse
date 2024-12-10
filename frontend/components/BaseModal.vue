<script setup>
import { VueFinalModal } from 'vue-final-modal'

defineProps({
    title: String,
})

defineEmits(['confirm']);
</script>

<template>
    <VueFinalModal
        class="flex justify-center items-center"
        content-class="flex flex-col max-w-xl mx-4 p-4 bg-white rounded-lg space-y-2"
        v-model="onConfirm"
    >
        <h1 class="text-xl">
            {{ title }}
        </h1>
        <slot />
        <BaseButton
            @click="$emit('confirm')"
            size="small"
        >
            Confirm
        </BaseButton>
    </VueFinalModal>
</template>
<script setup>
const props = defineProps({
    editMode: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <slot
        v-if="editMode"
        name="edit"
    />
    <slot
        v-else
        name="view"
    />
</template>
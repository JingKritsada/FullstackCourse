<script setup>
const props = defineProps({
    isSaving: Boolean,
});

defineEmits(['cancel', 'save']);
</script>

<template>
    <div class="space-x-2">
        <BaseButton
            size="small"
            variant="secondary"
            type="button"
            @click="$emit('cancel')"
        >
            Cancel
        </BaseButton>
        
        <BaseButton
            v-if="!isSaving"
            size="small"
            variant="primary"
            type="submit"
        >
            Save
        </BaseButton>
        <BaseButton
            v-else
            size="small"
            variant="disabled"
            disabled
        >
            Saving
        </BaseButton>
    </div>
</template>
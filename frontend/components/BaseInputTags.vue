<script setup>
import TagsInput from 'vue3-tags-input';

defineOptions({
    inheritAttrs: false,
});

const props = defineProps({
    name: String,
    modelValue: Array,
});

const { value, errorMessage } = useField(() => props.name, undefined, {
    syncVModel: true,
});

const style = computed(() => {
    if (errorMessage.value) {
        return 'error';
    }

    return '';
})

const onTagsChanged = (tags) => {
    value.value = tags;
}
</script>

<template>
    <div :class="style">
        <TagsInput
            @on-tags-changed="onTagsChanged"
            :add-tag-on-keys="[13, 188]"
            :tags="value"
            v-bind="$attrs"
        />
        <BaseErrorMessage v-if="errorMessage">{{ errorMessage }}</BaseErrorMessage>
    </div>
</template>

<style lang="css">
.error .v3ti {
    border-color: #E0115F;
}

.error .v3ti--focus {
    border-color: #E0115F;
}

.v3ti {
    border-width: 2px;
    border-color: #A1C2F1;
    border-radius: 0.375rem;
    padding: 0.2rem;
}

.v3ti--focus {
    outline-width: 0px;
    border-color: #5A96E3;
    box-shadow: none;
}

.v3ti .v3ti-tag {
    background: '#0A6EBD';
    font-size: .875rem;
    padding: 0.25rem 0.75rem;
}
</style>
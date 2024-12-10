<script setup>
defineOptions({
    inheritAttrs: false,
});

const props = defineProps({
    name: String,
    modelValue: String,
});

const { value, errorMessage } = useField(() => props.name, undefined, {
    syncVModel: true,
});

const style = computed(() => {
    if (errorMessage.value) {
        return 'w-full border-2 border-red rounded-md px-3 py-1 bg-white focus:outline-0';
    }

    return 'w-full border-2 border-tertiary rounded-md px-3 py-1 bg-white focus:border-secondary focus:outline-0';
})

defineEmits(['update:modelValue']);
</script>

<template>
    <div>
        <textarea
            v-model="value"
            :class="style"
            @input="$emit('update:modelValue', $event.target.value)"
            v-bind="$attrs"
        />
        <BaseErrorMessage v-if="errorMessage">{{ errorMessage }}</BaseErrorMessage>
    </div>
</template>
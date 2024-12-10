<script setup>
defineOptions({
    inheritAttrs: false,
});

const props = defineProps({
    name: String,
    modelValue: String,
    options: Array,
});

const { value, errorMessage } = useField(() => props.name, undefined, {
    syncVModel: true,
});

const style = computed(() => {
    if (errorMessage.value) {
        return 'appearance-none w-full border-2 border-red rounded-md px-2 py-2 bg-white focus:border-red focus:outline-0';
    }

    return 'appearance-none w-full border-2 border-tertiary rounded-md px-2 py-2 bg-white focus:border-secondary focus:outline-0';
});
</script>

<template>
    <div class="block mb-1">
        <div class="relative">
            <select
                :value="modelValue"
                v-model="value"
                ref="select"
                :class="style"
                v-bind="$attrs"
            >
                <option
                    v-for="option in options"
                    :value="option.value"
                >
                    {{ option.name }}
                </option>
            </select>
            <IconArrowDown class="absolute right-0 top-1/2 -mt-[12px] w-[24px] h-[24px] text-primary z-0" />
        </div>
        <BaseErrorMessage v-if="errorMessage">{{ errorMessage }}</BaseErrorMessage>
    </div>
</template>
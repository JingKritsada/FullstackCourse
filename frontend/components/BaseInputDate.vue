<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

defineOptions({
    inheritAttrs: false,
});

const props = defineProps({
    name: String,
    modelValue: Array,
})

const { value, errorMessage } = useField(() => props.name, undefined, {
    syncVModel: true,
});

const style = computed(() => {
    if (errorMessage.value) {
        return '!w-full !border-2 !border-red !rounded-md !px-9 !py-2 !bg-white !focus:outline-0';
    }

    return '!w-full !border-2 !border-tertiary !rounded-md !px-9 !py-2 !bg-white !focus:border-secondary !focus:outline-0';
})
</script>

<template>
    <div class="w-full">
        <VueDatePicker
            v-model="value"
            v-bind="$attrs"
            :input-class-name="style"
            :month-change-on-scroll="false"
            :enable-time-picker="false"
            type="date"
        />
        <BaseErrorMessage v-if="errorMessage">{{ errorMessage }}</BaseErrorMessage>
    </div>
</template>
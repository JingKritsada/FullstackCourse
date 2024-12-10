<script setup>
const props = defineProps({
    skills: Array,
})

const emits = defineEmits(['submit', 'cancel']);

const { handleSubmit, isSubmitting } = useForm({
    validationSchema: useSkillsValidationSchema(),
    validateOnInput: true,
    keepValuesOnUnmount: true,
    initialValues: {
        skills: props.skills,
    }
});

const onSubmit = handleSubmit(values => {
    emits('submit', values);
})
</script>

<template>
    <form @submit="onSubmit">
        <h2 class="text-xl font-bold mb-3 flex justify-between">
            <span>Skills</span>
            <BaseFormPanel
                :is-saving="isSubmitting"
                @cancel="$emit('cancel')"
            />
        </h2>
        <BaseInputTags
            name="skills"
            placeholder="Input you skills"
        />
    </form>
</template>
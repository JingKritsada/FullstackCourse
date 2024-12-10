<script setup>
const props = defineProps({
    experiences: Array,
});

const emits = defineEmits(['submit', 'cancel']);

const { handleSubmit, isSubmitting } = useForm({
    validationSchema: useExperiencesValidationSchema(),
    validateOnInput: true,
    keepValuesOnUnmount: true,
    initialValues: {
        experiences: props.experiences,
    }
});

const { remove, prepend, fields } = useFieldArray('experiences');

const onAdd = () => prepend({
    logo: '',
    title: '',
    company: '',
    type: '',
    start: '',
    end: '',
    skills: [],
    detail: '',
})

const onRemove = (idx) => {
    remove(idx)
};

const onSubmit = handleSubmit(values => {
    emits('submit', values);
})
</script>

<template>
    <form @submit="onSubmit">
        <h2 class="text-xl font-bold mb-3 flex justify-between">
            <span class="space-x-2">
                <span>Experiences</span>
                <BaseButton
                    type="button"
                    size="small"
                    variant="secondary"
                    @click="onAdd"
                >
                    Add
                </BaseButton>
            </span>
            <BaseFormPanel
                :is-saving="isSubmitting"
                @cancel="$emit('cancel')"
            />
        </h2>
        <ol class="space-y-4">
            <li
                v-for="(field, idx) in fields"
                :key="field.key"
            >
                <ExperienceFormField
                    :key="idx"
                    :field="field"
                    :idx="idx"
                    @remove="onRemove"
                />
            </li>
        </ol>
    </form>
</template>
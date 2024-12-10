<script setup>
const props = defineProps({
    idx: Number,
    field: Object,
});

defineEmits(['remove'])

const showLogoModal = ref(false);
const experienceTypeOptions = useExperienceTypes();
const currentlyWorkHere = ref(props.field.value.end == null);

const onConfirm = () => {
    showLogoModal.value = false
}

// watch คือ function ที่ใช้ในการตรวจสอบการเปลี่ยนแปลงค่าของตัวแปร และทำงานตามเงื่อนไขที่กำหนด
watch(currentlyWorkHere, (currentlyWorkHere) => {
    if (currentlyWorkHere) {
        props.field.value.end = null;
    }
});
</script>

<template>
    <div class="border border-primary p-5 rounded-md">
        <div class="md:flex md:space-x-2">
            <div class="flex space-x-3 md:flex-1">
                <div>
                    <BaseImage
                        :url="field.value.logo"
                        class="w-10 h-10 rounded-md cursor-pointer"
                        @click="showLogoModal = true"
                    />
                    <BaseModal
                        title="Company Logo"
                        v-model="showLogoModal"
                        @confirm="onConfirm"
                    >
                        <div class="my-5 min-w-[370px]">
                            <BaseInput
                                v-model="field.value.logo"
                                :name="`experiences[${idx}].logo`"
                                placeholder="http://example.com"
                            />
                        </div>
                    </BaseModal>
                </div>
                <div class="text-sm flex-1 md:text-base">
                    <BaseInput
                        v-model="field.value.title"
                        :name="`experiences[${idx}].title`"
                        placeholder="Your title"
                    />
                    <div>
                        <div class="flex items-top">
                            <div class="flex-1">
                                <BaseInput
                                    v-model="field.value.company"
                                    :name="`experiences[${idx}].company`"
                                    placeholder="Input your company name"
                                />
                            </div>
                            <span class="inline-block px-1 py-1.5"> - </span>
                            <div class="flex-1">
                                <BaseSelect
                                    v-model="field.value.type"
                                    :name="`experiences[${idx}].type`"
                                    :options="experienceTypeOptions"
                                    placeholder="Select employment type"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-top space-x-1 mb-2">
                            <BaseInputDate
                                :name="`experiences[${idx}].start`"
                                placeholder="Start date"
                            />
                            <span class="py-[4px]"> - </span>
                            <BaseInputDate
                                v-if="!currentlyWorkHere"
                                :name="`experiences[${idx}].end`"
                                placeholder="End date"
                            />
                            <span
                                class="block w-full py-[6px]"
                                v-else
                            >
                                Present
                            </span>
                        </div>
                        <div class="text-sm flex space-x-2 mb-2">
                            <input
                                :id="`experiences[${idx}].currentWork`"
                                v-model="currentlyWorkHere"
                                :value="true"
                                type="checkbox"
                            />
                            <label :for="`experiences[${idx}].currentWork`">I am currently working in this role.</label>
                        </div>
                    </div>

                    <div class="py-3 md:hidden">
                        <BaseTextarea
                            :name="`experiences[${idx}].detail`"
                            v-model="field.value.detail"
                            placeholder="Input detail of your achievements"
                            class="w-full"
                            rows="6"
                        />
                    </div>
                    <BaseInputTags
                        :name="`experiences[${idx}].skills`"
                        placeholder="Input your skills"
                    />
                </div>
            </div>
            <div class="hidden md:block md:flex-1">
                <BaseTextarea
                    :name="`experiences[${idx}].detail`"
                    v-model="field.value.detail"
                    placeholder="Input detail of your achievements"
                    class="w-full"
                    rows="6"
                />
            </div>
            <BaseButton
                class="block w-full mt-4 md:hidden"
                size="small"
                type="button"
                variant="danger"
                @click="$emit('remove', idx)"
            >
                Delete
            </BaseButton>
        </div>
        <BaseButton
            class="hidden md:block md:w-full md:mt-4"
            size="small"
            type="button"
            variant="danger"
            @click="$emit('remove', idx)"
        >
            Delete
        </BaseButton>
    </div>
</template>
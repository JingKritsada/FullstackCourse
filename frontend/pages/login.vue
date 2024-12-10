<script setup>
definePageMeta({
    layout: 'center',
});

useHead({
    title: 'Login',
});

const normalVariable = 1;
const reactiveVariable = ref(1);
// reactiveVariable ค่าจะเปลี่ยนแปลงได้ และจะทำให้ component ที่ใช้ reactiveVariable นั้น re-render ใหม่

console.log('normalVariable', normalVariable);
console.log('reactiveVariable', reactiveVariable);
console.log('reactiveVariable.value', reactiveVariable.value);

const onSubmit = async (values) => {
    console.log('values', values);
}
</script>

<template>
    <main class="m-auto w-[300px]">
        <LoginForm @submit="onSubmit" />

        <p class="mt-10">normal: {{ normalVariable }}</p>
        <BaseButton
            size="small"
            @click="normalVariable = normalVariable + 1"
        >
            normal variable
        </BaseButton>

        <p class="mt-10">reactive: {{ reactiveVariable }}</p>
        <BaseButton
            size="small"
            @click="reactiveVariable = reactiveVariable + 1"
        >
            reactive variable
        </BaseButton>
    </main>
</template>
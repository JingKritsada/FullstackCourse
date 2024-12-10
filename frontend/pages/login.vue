<script setup>
import { useAuthStore } from '@/stores/auth';

definePageMeta({
    layout: 'center',
});

useHead({
    title: 'Login',
});

const store = useAuthStore();

const onSubmit = async (values) => {
    console.log('values', values);
}
</script>

<template>
    <main class="m-auto w-[300px]">
        <LoginForm @submit="onSubmit" />

        <p>{{ store.number }}</p>
        <p>{{ store.multiplyByTwo }}</p>
        <BaseButton
            size="small"
            @click="store.increase"
        >
            Increase
        </BaseButton>
    </main>
</template>
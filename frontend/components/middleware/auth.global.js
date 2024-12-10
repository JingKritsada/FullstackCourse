import { useAuthStore } from '@/stores/auth';

export default defineNuxtRouteMiddleware((to, from) => {
    const token = useCookie('token');
    const store = useAuthStore();

    if (token.value) {
        store.setUser(token.value);
    }
});
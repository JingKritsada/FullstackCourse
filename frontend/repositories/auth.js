export function loginAPI(username, password) {
    return useFetchAPI('/auth/login', {
        method: 'post',
        body: {
            username,
            password,
        },
    });
}
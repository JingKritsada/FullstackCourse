export const useFetchAPI = (request, opts) => {
    // get from .env
    const config = useRuntimeConfig();

    return useFetch(request, { baseURL: config.public.baseApiUrl, ...opts })
}
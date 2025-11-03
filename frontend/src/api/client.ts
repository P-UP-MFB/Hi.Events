import axios from "axios";
import { isSsr } from "../utilites/helpers.ts";
import { getConfig } from "../utilites/config.ts";

const BASE_URL = isSsr()
    ? getConfig('VITE_API_URL_SERVER')
    : getConfig('VITE_API_URL_CLIENT');
const LOGIN_PATH = "/auth/login";
const PREVIOUS_URL_KEY = 'previous_url';

// Public routes: exact matches and prefixes. Avoid broad substring checks.
const PUBLIC_PATHS_EXACT = [
    '/',
    '/privacy-policy',
    '/terms-of-service',
    '/auth/login',
    '/auth/register',
    '/auth/forgot-password',
];

const PUBLIC_PATH_PREFIXES = [
    '/auth/accept-invitation',
    '/checkout',
    '/event/',
    '/order/',
    '/widget',
    '/product/',
    '/check-in',
    '/events/',
    '/print',
    '/account/payment',
];

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true,
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        const { status } = error.response;
        const requestUrl = error?.config?.url || '';
        const currentPath = window?.location?.pathname || '/';
        const isPublicExact = PUBLIC_PATHS_EXACT.includes(currentPath);
        const isPublicPrefix = PUBLIC_PATH_PREFIXES.some(prefix => currentPath.startsWith(prefix));
        const isAllowedUnauthenticatedPath = isPublicExact || isPublicPrefix;
        const isManageEventPath = currentPath.startsWith('/manage/event/');
        const isAuthError = status === 401 || status === 403;
        const isMeEndpoint = requestUrl.includes('auth/me');

        // If the "get me" call fails, prefer sending users to the public landing page.
        if (isAuthError && isMeEndpoint) {
            if (currentPath !== '/') {
                window?.location?.replace('/');
            }
            return Promise.reject(error);
        }

        if (isAuthError && (!isAllowedUnauthenticatedPath || isManageEventPath)) {
            // Store the current URL before redirecting to the login page
            window?.localStorage?.setItem(PREVIOUS_URL_KEY, window?.location.href);
            window?.location?.replace(LOGIN_PATH);
        }

        return Promise.reject(error);
    }
);

axios.defaults.withCredentials = true;

export const redirectToPreviousUrl = () => {
    const previousUrl = window?.localStorage?.getItem(PREVIOUS_URL_KEY) || '/manage/events';
    window?.localStorage?.removeItem(PREVIOUS_URL_KEY);
    if (typeof window !== "undefined") {
        window.location.href = previousUrl;
    }
};

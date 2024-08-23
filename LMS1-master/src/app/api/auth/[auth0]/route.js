// app/api/auth/[auth0]/route.js

// app/api/auth/[auth0]/route.js
import { handleAuth, handleLogin, handleLogout } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
    login: handleLogin({
        returnTo: '/AdminDashboard',
    }),
    signup: handleLogin({
        authorizationParams: {
            screen_hint: 'signup',
        },
        returnTo: '/AdminDashboard',
    }),
    logout: handleLogout({
        returnTo: '/', // Redirect to homepage after logout
    }),
});

{/*
import { handleAuth, handleLogin, handleLogout, handleCallback } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
    login: handleLogin({
        returnTo: '/custom-callback', // Redirect to custom callback route
    }),
    signup: handleLogin({
        authorizationParams: {
            screen_hint: 'signup',
        },
        returnTo: '/', // Redirect to homepage after signup
    }),
    logout: handleLogout({
        returnTo: '/', // Redirect to homepage after logout
    }),
    callback: handleCallback() // Use default callback handler
});

*/}
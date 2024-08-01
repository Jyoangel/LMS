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

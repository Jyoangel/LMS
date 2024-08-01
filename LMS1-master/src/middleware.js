import { NextResponse } from 'next/server';
import { getSession } from '@auth0/nextjs-auth0';

export async function middleware(req) {
    const session = await getSession(req, NextResponse.next());

    // If there is no session, redirect to the login page
    if (!session) {
        const url = new URL('/api/auth/login', req.url);
        url.searchParams.set('returnTo', req.nextUrl.pathname);
        return NextResponse.redirect(url);
    }

    // If there is a session, allow the request to continue
    return NextResponse.next();
}

// Specify which paths to protect
export const config = {
    matcher: ['/protected/(.*)',],
};

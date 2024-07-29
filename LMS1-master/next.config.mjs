/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://lms1.kinde.com/api/:path*',
            },
        ];
    },
};

export default nextConfig;

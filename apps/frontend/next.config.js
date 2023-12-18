/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static.wikia.nocookie.net',
                port: '',
                pathname: '/minecraft_gamepedia/images/**',
            },
        ],
    },
    transpilePackages: ['lucide-react']
}

module.exports = nextConfig

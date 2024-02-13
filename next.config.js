/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: { ignoreBuildErrors: true },
    images: { domains: ['www.s3i.training'], formats: ['image/avif', 'image/webp'], unoptimized: true },
}

module.exports = nextConfig

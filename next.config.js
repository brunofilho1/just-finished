/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  experimental: {
    appDir: false,
  },
}

module.exports = nextConfig

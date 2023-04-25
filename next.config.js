/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ["cdn.myanimelist.net", "img.youtube.com"]
  }
}

module.exports = nextConfig

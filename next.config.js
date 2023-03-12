/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND_API_URL:'http://localhost:8001/api'
  }
}

module.exports = nextConfig

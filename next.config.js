/** @type {import('next').NextConfig} */
const nextConfig = {
  // 큰 정적 파일 처리 최적화
  experimental: {
    optimizePackageImports: ['recharts'],
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const nextConfig = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true,
    }
  },
  async rewrites() {
    return {
     fallback: [
       {
         source: '/:path*',
         destination: '/:path*/index.html',
       },
     ],
   }
  },
})

module.exports = nextConfig

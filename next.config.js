/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'],
  },
};

// Import the Cloudflare adapter dynamically
import('@opennextjs/cloudflare').then(({ default: cloudflare }) => {
  module.exports = cloudflare(nextConfig);
}); 
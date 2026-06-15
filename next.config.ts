// next.config.js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pixabay.com',
      },
      // Add other domains you use (e.g., images.unsplash.com)
    ],
  },
};

module.exports = nextConfig;
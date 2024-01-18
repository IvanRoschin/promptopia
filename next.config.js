/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
      },
    ],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
  async exportPathMap() {
    return {
      "/": { page: "/" }, // Home page
      "/create-prompt": { page: "/create-prompt" }, // create-prompt page
      "/update-prompt": { page: "/update-prompt" }, // update-prompt page
      "/profile": { page: "/profile" }, // profile page
      "/profile/[id]": { page: "/profile/[id]" }, // User profile page
    };
  },
};

module.exports = nextConfig;

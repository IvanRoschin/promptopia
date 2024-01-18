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
  output: {
    // Your logic for generating static paths
    async generatePages() {
      return [
        { route: "/" }, // Home page
        { route: "/create-prompt" }, // create-prompt page
        { route: "/update-prompt" }, // update-prompt page
        { route: "/profile" }, // profile page
        { route: "/profile/[id]", params: { id: "example-id" } }, // User profile page
      ];
    },
  },
};

module.exports = nextConfig;

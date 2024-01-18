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
  // async exportPathMap() {
  //   return {
  //     "/": { page: "/" }, // Home page
  //     "/create-prompt": { page: "/create-prompt" }, // create-prompt page
  //     "/update-prompt": { page: "/update-prompt" }, // update-prompt page
  //     "/profile": { page: "/profile" }, // profile page
  //     "/profile/[id]": { page: "/profile/[id]" }, // User profile page
  //   };
  // },
  // generateStaticParams: async () => {
  //   // Your logic for generating static paths
  //   return [
  //     { params: { slug: "/" } },
  //     { params: { slug: "create-prompt" } },
  //     { params: { slug: "update-prompt" } },
  //     { params: { slug: "profile" } },
  //     { params: { slug: "profile/[id]" } },
  //   ];
  // },
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

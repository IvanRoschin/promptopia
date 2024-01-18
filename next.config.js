/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // distDir: "dist",
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    unoptimized: true,
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
};

module.exports = nextConfig;

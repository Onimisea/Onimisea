/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  output: "standalone",
  generateBuildId: async () => {
    return "static-build-id"; // Prevents BUILD_ID file generation
  },
};

export default nextConfig;

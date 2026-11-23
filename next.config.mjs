/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      { source: "/page3", destination: "/case-studies", permanent: true },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
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

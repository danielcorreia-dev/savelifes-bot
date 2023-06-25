/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination:
          'https://01ab-2804-29b8-5121-249b-35c3-6193-51db-120d.ngrok-free.app/:path*',
      },
    ];
  },
};

module.exports = nextConfig;

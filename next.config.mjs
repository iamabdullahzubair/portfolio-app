// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'firebasestorage.googleapis.com',
          pathname: '/v0/b/**', // Allow all paths under Firebase Storage
        },
      ],
    },
  };
  
  export default  nextConfig;
  
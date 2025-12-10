/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@vkontakte/vkui'],

  modularizeImports: {
    '@vkontakte/vkui': {
      transform: '@vkontakte/vkui/dist/cssm',
      skipDefaultConversion: true,
    },
  },
};

export default nextConfig;

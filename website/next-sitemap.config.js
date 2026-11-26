/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: 'https://vkui.io',
  changefreq: 'weekly',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    transformRobotsTxt: async (_, robotsTxt) =>
      robotsTxt.replace(
        'User-agent: *\nAllow: /\n',
        '$&Content-Signal: ai-train=yes, search=yes, ai-input=yes\n',
      ),
  },
  output: 'export',
  generateIndexSitemap: false,
  exclude: ['/404', '/404/', '/500', '/500/', '/_not-found', '/_not-found/'],
};

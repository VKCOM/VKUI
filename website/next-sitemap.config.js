/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: 'https://vkui.io',
  changefreq: 'weekly',
  generateRobotsTxt: true,
  output: 'export',
  generateIndexSitemap: false,
  exclude: ['/404', '/404/', '/500', '/500/', '/_not-found', '/_not-found/'],
};

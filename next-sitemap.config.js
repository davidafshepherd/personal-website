/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://davidshepherd.dev',   // change to your actual domain later
  generateRobotsTxt: true,                // automatically create robots.txt
  sitemapSize: 7000,
  exclude: ['/404'],                      // optional
  changefreq: 'weekly',
  priority: 0.7,
};

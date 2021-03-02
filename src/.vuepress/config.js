const title = "Bajsom po Srbiji";
const description = "Dnevnik putovanja";

module.exports = {
  title,
  description,

  dest: './dist',

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    search: false,
    navbar: false,
    nav: [],
    sidebar: {
      "/dnevnik/": [
        {
          title: `${title}`,
          description,
          collapsable: false,
          sidebarDepth: 0,
          children: [
            //
            "1993-07-05",
            "1993-07-06",
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};

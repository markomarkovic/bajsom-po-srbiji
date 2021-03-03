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
            "1993-07-07",
            "1993-07-08",
            "1993-07-09",
            "1993-07-10",
            "1993-07-11",
            "1993-07-12",
            "1993-07-13",
            "1993-07-14",
            "1993-07-15",
            "1993-07-16",
            "1993-07-17",
            "1993-07-18",
            "1993-07-19",
            "1993-07-20",
            "1993-07-21",
            "1993-07-22",
            "1993-07-23",
            "1993-07-24",
            "1993-07-25",
            "1993-07-26",
            "1993-07-27",
            "1993-07-28",
            "1993-07-29",
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

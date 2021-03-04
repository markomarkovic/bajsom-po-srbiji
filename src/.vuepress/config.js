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
            "dan-1",
            "dan-2",
            "dan-3",
            "dan-4",
            "dan-5",
            "dan-6",
            "dan-7",
            "dan-8",
            "dan-9",
            "dan-10",
            "dan-11",
            "dan-12",
            "dan-13",
            "dan-14",
            "dan-15",
            "dan-16",
            "dan-17",
            "dan-18",
            "dan-19",
            "dan-20",
            "dan-21",
            "dan-22",
            "dan-23",
            "dan-24",
            "dan-25",
            "dan-26",
            "dan-27",
            "dodatak",
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

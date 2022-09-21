import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  title: "你好， VuePress ！",
  description: "这是我的第一个 VuePress 站点",
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "en-US",
      title: "pd-components",
      description: "Vue-powered Static Site Generator",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "pd-components",
      description: "Vue 驱动的静态网站生成器",
    },
  },
  theme: defaultTheme({
    repo: "https://gitlab.com/foo/bar", //仓库链接
    // 默认主题配置
    navbar: [
      {
        text: "Docs",
        link: "/documents",
      },
      {
        text: "components",
        link: "/componentsView",
      },
    ],
    //侧边栏配置
    sidebar: {
      "/componentsView": [
        {
          text: "componentsView",
          link: "/componentsView",
          children: [],
        },
        {
          text: "Media",
          link: "/componentsView/Media.md",
          children: [
            {
              text: "media01",
              link: "/componentsView/Media/media01.md",
            },
            {
              text: "media02",
              link: "/componentsView/Media/media02.md",
            },
          ],
        },
      ],
    },
  }),
});

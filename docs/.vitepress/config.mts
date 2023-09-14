import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "weJee 个人主页",
  description: "daily log",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      {
        text: "公司项目",
        items: [
          {
            text: "pos小程序",
            link: "/company/date-component",
          },
        ],
      },
      {
        text: "后端",
        items: [
          {
            text: "node.js",
            link: "backend/node",
          },
        ],
      },
    ],

    sidebar: [
      {
        text: "pos小程序",
        items: [{ text: "日期组件", link: "/company/date-component" }],
      },
      {
        text: "后端",
        items: [{ text: "node.js", link: "/backend/node" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/wiJeeXu/wijeexu.github.io" },
    ],
  },
});

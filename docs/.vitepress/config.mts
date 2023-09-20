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
          {
            text: "koa",
            link: "backend/koa",
          },
        ],
      },
      {
        text: "前端",
        items: [
          {
            text: "脚手架",
            link: "frontend/cli",
          },
          {
            text: "webpack",
            link: "frontend/module/webpack",
          },
          {
            text: "pnpm",
            link: "frontend/pnpm",
          },
        ],
      },
      {
        text: "其他",
        items: [
          {
            text: "内网穿透",
            link: "other/index",
          },
          {
            text: "算法",
            link: "other/arithmetic",
          },
        ],
      },
    ],

    sidebar: [
      {
        text: "pos小程序",
        collapsed: true,
        items: [{ text: "日期组件", link: "/company/date-component" }],
      },
      {
        text: "后端",
        collapsed: true,
        items: [
          { text: "node.js", link: "/backend/node" },
          {
            text: "koa",
            link: "/backend/koa",
          },
        ],
      },
      {
        text: "前端",
        collapsed: true,
        items: [
          { text: "脚手架", link: "/frontend/cli" },
          { text: "webpack", link: "/frontend/module/webpack" },
          { text: "pnpm", link: "/frontend/pnpm" },
        ],
      },
      {
        text: "其他",
        collapsed: true,
        items: [
          { text: "内网穿透", link: "/other/index" },
          { text: "算法", link: "/other/arithmetic" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/wiJeeXu/wijeexu.github.io" },
    ],
  },
});

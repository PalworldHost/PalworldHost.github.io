import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://palworldhost.github.io/", // replace this with your deployed domain
  author: "Pals",
  desc: "搭建属于自己的 Palworld 服务器，手把手搭建 Palworld 服务器教程",
  title: "Palworld服务器",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "zh", // html lang code. Set this empty and default will be "en"
  langTag: ["zh-CN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [];

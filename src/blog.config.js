/*
 * @Author: ROYIANS
 * @Date: 2023/2/7 9:38
 * @Description: 注: process.env.XX是Vercel的环境变量，配置方式见：https://docs.tangly1024.com/zh/features/personality
 * @sign:
 * ╦═╗╔═╗╦ ╦╦╔═╗╔╗╔╔═╗
 * ╠╦╝║ ║╚╦╝║╠═╣║║║╚═╗
 * ╩╚═╚═╝ ╩ ╩╩ ╩╝╚╝╚═╝
 */
const BLOG = {
  // blog basic info START
  LANG: 'zh-CN', // e.g. zh-CN en-US
  SINCE: '2018',
  AUTHOR: 'ROYIANS',
  SITE_TITLE: '小梦岛 - ROYIANS个人博客',
  SITE_NAME: '小梦岛',
  SITE_DESCRIPTION: '记录生活中的点点滴滴',
  SITE_KEYWORDS: '博客,IT,ROYIANS,小梦岛,LDL,Morty.ROY,技术博客',
  SITE_DOMAIN: 'https://royians.cn', // 请不要省略 http://。
  SITE_LOGO_IMG: '/favicon.ico',
  MAIN_COLOR: '#009688', // hex color
  CUSTOM_FONT: false,
  CUSTOM_FONT_SANS: [],
  CUSTOM_FONT_SERIF: [],
  CUSTOM_FONT_URL: [],
  APPEARANCE: 'light', // ['light', 'dark', 'auto'], // light 日间模式 ， dark夜间模式， auto根据时间和主题自动夜间模式
}

module.exports = BLOG

import {Head, Html, Main, NextScript} from 'next/document'
import BLOG from '@/blog.config'
import {useEffect} from "react";


// 用户指定CUSTOM_FONT 则取CUSTOM_FONT_URL
const FONTS_URL = BLOG.CUSTOM_FONT ? BLOG.CUSTOM_FONT_URL : []

export default function Document() {
  useEffect(() => {
    // @ts-ignore
    import("amfe-flexible");
  }, []);
  return (
    <Html lang={BLOG.LANG}>
      <Head>
        {[...FONTS_URL]?.map(fontUrl => <link href={`${fontUrl}`} key={fontUrl} rel="stylesheet" />)}
        <meta name="description" content={BLOG.SITE_DESCRIPTION} />
        <meta name="keywords" content={BLOG.SITE_KEYWORDS} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={BLOG.SITE_TITLE} />
        <meta property="og:url" content={BLOG.SITE_DOMAIN} />
        <meta property="og:SITE_TITLE" content={BLOG.SITE_TITLE} />
        <meta property="og:description" content={BLOG.SITE_DESCRIPTION} />
        <meta property="og:locale" content={BLOG.LANG} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={BLOG.SITE_TITLE} />
        <meta name="twitter:description" content={BLOG.SITE_DESCRIPTION} />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="renderer" content="webkit" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="screen-orientation" content="portrait" />
        <meta name="full-screen" content="true" />
        <meta name="x5-fullscreen" content="true" />
        <meta name="x5-orientation" content="portrait" />
        <meta name="360-fullscreen" content="true" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta httpEquiv="Cache-Control" content="no-siteapp" />
        <link rel="icon" href={BLOG.SITE_LOGO_IMG} />
      </Head>
      <body className="font-sans">
      <Main />
      <NextScript />
      </body>
    </Html>
  )
}

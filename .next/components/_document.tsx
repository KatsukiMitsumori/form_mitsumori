import React from 'react'
import Head from 'next/head'

interface MetaProps {
  title?: string
  description?: string
  ogImage?: string
  ogUrl?: string
  siteName?: string
  favicon?: string
  twitterCard?: string
  twitterSite?: string
  appleTouchIcons?: { size: string; href: string }[]
  canonicalUrl?: string
  lang?: string
  isHomePage?: boolean
}

const Meta = ({
  title = 'タイトル',
  description = '説明',
  ogImage = '/images/default-og-image.png',
  ogUrl = 'https://xxxx',
  siteName = 'サイトの名前',
  favicon = '/favicon.ico',
  twitterCard = 'summary',
  twitterSite = '@your-default-twitter-handle',
  appleTouchIcons = [
    { size: '32x32', href: '/images/default-apple-touch-icon-32x32.png' },
    { size: '64x64', href: '/images/default-apple-touch-icon-64x64.png' },
    { size: '180x180', href: '/images/default-apple-touch-icon-180x180.png' },
  ],
  canonicalUrl = 'https://xxxx',
  lang = 'ja_JP',
  isHomePage = false,
}: MetaProps) => {
  const pageTitle = isHomePage ? siteName : `${title} - ${siteName}` // 修正

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={lang} />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="shortcut icon" href={favicon} />

      {appleTouchIcons.map(({ size, href }) => (
        <link key={size} rel="apple-touch-icon" sizes={size} href={href} />
      ))}

      <link rel="canonical" href={canonicalUrl} />
      <link rel="icon" href={favicon} />
    </Head>
  )
}

export default Meta
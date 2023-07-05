const CONFIG = {
  // profile setting (required)
  profile: {
    name: "hyunw9",
    image: "https://github.com/hyunw9/morethan-log/blob/789bc45276200b7f8973bd40cf7c1d5883dba22c/notion-avatar-1688006061411.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "server developer",
    bio: "코드가 보이지 않는다면 새로고침 해주세요.",
    email: "rkdgusdnr32@naver.com",
    linkedin: "hyeonwook-kang-716a1a250/",
    github: "hyunw9",
    instagram: "hyunw9",
  },
  projects: [
    {
      name: `ShallWe`,
      href: "https://github.com/ShallWeProject",
    },
  ],
  // blog setting (required)
  blog: {
    title: "현욱님의 개발일지",
    description: "현욱님의 개발일지 입니다!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }
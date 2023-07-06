// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "HUB 3.0",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "From UGC videos to influencer and campaign management - we've got you covered on every step towards getting viral!",
        },
        { name: "format-detection", content: "telephone=no" },
        { name: "msapplication-TileColor", content: "#101415" },
        {
          name: "theme-color",
          media: "(prefers-color-scheme: light)",
          content: "#101415",
        },
        {
          name: "theme-color",
          media: "(prefers-color-scheme: dark)",
          content: "#101415",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css",
        },
        { rel: "icon", type: "image/svg+xml", href: "/916hub-favicon.svg" },
      ],
    },

    rootTag: "main",
  },

  devtools: { enabled: true },

  alias: {
    "@stores": "/stores",
    "@assets": "/assets",
    "@img": "/assets/img",
    "@js": "/js",
  },

  css: ["@/assets/scss/main.scss"],

  modules: ["@nuxtjs/tailwindcss"],

  /**
   * Module configuration options
   */

  // Tailwind Config
  tailwindcss: {},
});

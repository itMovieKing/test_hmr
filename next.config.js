/*
 * @Date: 2022-12-15 14:37:47
 * @LastEditors: 卫鹏飞
 * @Author: 卫鹏飞
 * @LastEditTime: 2024-10-11 13:51:31
 * @FilePath: /new-official-website/next.config.js
 * @Description:
 */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

const {
  serverRuntimeConfig,
  publicRuntimeConfig,
} = require("./next.runtimeConfig")

const nextConfig = withBundleAnalyzer({
  images: {
    disableStaticImages: true,
    domains: ["static.novadax.com", "cdn.novadax.com"],
  },

  serverRuntimeConfig,
  publicRuntimeConfig,
})

module.exports = nextConfig

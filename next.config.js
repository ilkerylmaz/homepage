// const withPWA = require("next-pwa");
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    swcMinify: true,
    env: {
      API_URL: isDev ? "http://localhost:3000" : "https://ademilter.com",
    },
    images: {
      domains: ["dl.airtable.com", "images.unsplash.com"],
    },
    // pwa: {
    //   dest: "public",
    //   disable: isDev,
    // },
  };
};

module.exports = (phase) => nextConfig(phase);

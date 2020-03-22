/**
 * NextJS config
 *
 * See for more information: https://nextjs.org/docs/api-reference/next.config.js/introduction
 *
 */

const endpoints = require("./endpoints");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

const nextConfig = {
    publicRuntimeConfig: {
        endpoints
    },
    cssLoaderOptions: {
        url: false
    },
    webpack: config => {
        return config;
    }
};

module.exports = (phase) => {
    return withSass(withCSS(nextConfig));
};
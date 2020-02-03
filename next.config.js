// const constants = require('next/constants');
const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");

const nextConfig = {
    cssLoaderOptions: {
        url: false
    },
    webpack: config => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [{
                    loader: 'url-loader'
                },
                {
                    loader: 'svg-inline-loader?classPrefix'
                }
            ]
        });
        config.module.rules.push({
            test: /\.(png|jpg|gif|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        });
        return config;
    }
};

module.exports = (phase) => {
    return withSass(withCSS(nextConfig));
};
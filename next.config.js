// const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
// const constants = require("next/constants");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

// console.log(constants);

const nextConfig = {
    webpack: config => {
        let rules = (config.module.rules || []);

        rules.push({
            test: /\.svg$/,
            use: [{
                    loader: 'url-loader'
                },
                {
                    loader: 'svg-inline-loader?classPrefix'
                }
            ]
        });
        rules.push({
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
    // console.log(phase, "phase");
    return withCSS(withSass(nextConfig));
};
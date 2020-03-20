/**
 * Metajob Endpoints
 *
 * process.env.NODE_ENV; // Node environment variable.
 * See for more information: https://nextjs.org/docs/api-reference/next.config.js/environment-variables
 * Overwrite node environment variables: https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html
 *
 */

// Import endpoints static values from environment file
const endpoints = require(`./static/${process.env.NODE_ENV}.json`);

console.info("> Environment:", process.env.NODE_ENV);

// Update local host from environment variables
if (process.env.HOSTNAME) {
    endpoints.local.host = (process.env.HOSTNAME || endpoints.local.host);
    console.info("> 'endpoints.local.host' setted by environment variable HOSTNAME:", endpoints.local.host);
}

// Update local port from environment variables
if (process.env.PUBLIC_PORT || process.env.NEXTJS_PORT) {
    endpoints.local.port = (process.env.PUBLIC_PORT || process.env.NEXTJS_PORT || endpoints.local.port);
    console.info(`> 'endpoints.local.port' setted by environment variable ${process.env.PUBLIC_PORT ? "PUBLIC_PORT" : "NEXTJS_PORT"}:`, endpoints.local.port);
}

console.info("> Endpoints:", endpoints);

module.exports = endpoints;
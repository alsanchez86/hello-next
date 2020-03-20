/**
 * NextJS custom server
 *
 * See for more information: https://nextjs.org/docs/advanced-features/custom-server
 * Basic Nextjs custom server example: https://github.com/zeit/next.js/blob/canary/examples/custom-server/server.js
 * TODO: Implement SSR Caching: https://github.com/zeit/next.js/blob/canary/examples/ssr-caching/server.js
 *
 */

const defaultProtocol = "https";
const defaultDomain = "localhost";
const defaultPort = 3000;
const dev = (process.env.NODE_ENV !== "production");
const protocol = (process.env.PROTOCOL || defaultProtocol); // TODO: https://medium.com/@anMagpie/secure-your-local-development-server-with-https-next-js-81ac6b8b3d68
const host = (process.env.HOSTNAME || defaultDomain);
const nextjsPort = (parseInt(process.env.NEXTJS_PORT, 10) || defaultPort);
const port = (parseInt(process.env.PUBLIC_PORT, 10) || nextjsPort);
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const app = next({ dev });

// Init server app! :)
app
    .prepare()
    .then(() => {
        createServer((request, response) => {
            const parsedUrl = parse(request.url, true);
            app.getRequestHandler(request, response, parsedUrl);

        })
        .listen(port, (error) => {
            if (error) {
                throw error;
            }
            console.log(`> Ready on ${protocol}://${host}:${port}`);
        });
    });
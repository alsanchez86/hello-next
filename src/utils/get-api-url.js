/**
 * Get api absolute url endpoint from environment
 *
 */

import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export default (name) => {
    const endpoint = publicRuntimeConfig?.endpoints?.[name];
    const hostname = endpoint?.hostname;
    const port = endpoint?.port;
    const aux = endpoint?.aux;
    return `http://${hostname}:${port}/${aux}`;
};
import fetch from 'isomorphic-unfetch';

/**
 * Simple wrapper for vanilla fetch
 *
 * @export
 * @param {*} url
 * @returns
 */
export const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}
/**
 * Get a random quote from quotes array
 *
 * @param {array} collection
 * @returns {object}
 */
export function getRandomElementFromArray(collection) {
    return collection[Math.floor(Math.random() * collection.length)];
}

/**
 *
 * @param {number} value
 * @return {object}
 */
export const randomNumber = (value = 0) => ({
    type: "RANDOM_NUMBER",
    value: {
        value
    }
});

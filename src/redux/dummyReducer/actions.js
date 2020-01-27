/**
 *
 * @param {number} value
 * @return {object}
 */
export const randomNumberAction = (value = 0) => ({
    type: "RANDOM_NUMBER",
    value: value
});

import { generateState } from "./utils";

export default (state = generateState(), action) => {
    switch (action.type) {
        case "RANDOM_NUMBER":
            return setRandomNumber(action);

        default:
            return state;
    }
}

/**
 *
 *
 * @param {*} action
 * @returns
 */
function setRandomNumber(action) {
    return generateState({
        randomNumber: action.value
    });
}
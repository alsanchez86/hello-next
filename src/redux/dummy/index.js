import { generateState } from "./utils";

export default (state = generateState(), action) => {
    switch (action.type) {
        case "RANDOM_NUMBER":
            return setRandomNumber(state, action);

        default:
            return state;
    }
}

function setRandomNumber(state, action) {
    return generateState({
        randomNumber: action.value
    });
}
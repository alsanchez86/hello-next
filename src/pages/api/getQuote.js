import quotes from "./quotes.json";
import { getRandomElementFromArray } from "../../utils/getRandomElementFromArray";

export default (request, response) => {
    const { author } = request?.query;
    let quote = (author) ? quotes.filter(e => e.author.toLowerCase().includes(author.toLowerCase())) : getRandomElementFromArray(quotes);

    return response
        .status(200)
        .json(quote);
};
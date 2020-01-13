import quotes from "./quotes.json";
import { getRandomElementFromArray } from "../../shared/tools/utils";

export default (req, res) => {
    const { author } = req?.query;
    let quote = author ? quotes.filter(e => e.author.toLowerCase().includes(author.toLowerCase())) : getRandomElementFromArray(quotes);
    // Return response
    res
        .status(200)
        .json(quote);
};
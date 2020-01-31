import posts from "./posts.json";

export default (request, response) => response.status(200).json(posts);
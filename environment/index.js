let enviroment = {};

switch (process.env.NODE_ENV) {
    case "production":
        enviroment = require("./static/production.json");
        break;

    case "development":
        enviroment = require("./static/development.json");
        break;

    default:
        enviroment = require("./static/development.json");
        break;
}

export default enviroment;
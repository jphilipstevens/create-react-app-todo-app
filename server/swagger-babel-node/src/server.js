import express from "express";
import SwaggerUi from "swagger-tools/middleware/swagger-ui";
import bodyParser from "body-parser";
import path from "path";
import morgan from "morgan";
import SwaggerExpress from "swagger-express-mw";
import ArgParser from "args-parser";

require("./module-registration");

const app = express();

const appRoot = path.resolve(path.join(__dirname, ".."));

const config = {
    appRoot: appRoot,
    configDir: path.resolve(path.join(appRoot, "config")),
    swaggerFile: path.resolve(path.join(appRoot, "config", "swagger.json")),
    clientPath: ArgParser(process.argv).clientPath
};

SwaggerExpress.create(config, (err, swaggerExpress) => {

    if (err) {
        throw err;
    }

    app.use(
        morgan(":remote-addr - :remote-user [:date[clf]] ':method :url HTTP/:http-version' :status :res[content-length] :response-time ms")
    );
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // Serve static assets
    app.use(express.static(path.resolve(config.clientPath)));

    app.use(SwaggerUi(swaggerExpress.runner.swagger));
    swaggerExpress.register(app);

    const port = process.env.PORT || 8080;
    app.listen(port);

    console.log(`running the app on port ${port}`);
});


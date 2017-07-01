import * as bodyParser from "body-parser";

import * as express from "express";
import { Express } from "express";
import * as morgan from "morgan";
import * as path from "path";
import * as SwaggerUi from "swagger-tools/middleware/swagger-ui";
import * as SwaggerExpress from "swagger-express-mw";

interface ServerConfig {
    appRoot: string;
    configDir: string;
    swaggerFile: string;
    clientPath: string;
};

class Server {
    app: Express;
    config: ServerConfig;

    constructor(config: ServerConfig) {
        this.app = express();
        this.config = config;
    }


    start = (port: number) => {
        const self = this;
        SwaggerExpress.create(this.config, (err, swaggerExpress) => {

            if (err) {
                throw err;
            }

            self.app.use(
                morgan(":remote-addr - :remote-user [:date[clf]] ':method :url HTTP/:http-version' :status :res[content-length] :response-time ms")
            );
            self.app.use(bodyParser.urlencoded({ extended: true }));
            self.app.use(bodyParser.json());

            // Serve static assets
            self.app.use(express.static(path.resolve(self.config.clientPath)));

            self.app.use(SwaggerUi(swaggerExpress.runner.swagger));
            swaggerExpress.register(self.app);

            self.app.listen(port);

            console.log(`Using client path ${path.resolve(self.config.clientPath)}`);
            console.log(`running the app on port ${port}`);
        });
    }
}

export { ServerConfig, Server };

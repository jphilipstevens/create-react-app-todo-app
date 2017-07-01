import * as path from "path";
import * as ArgParser from "args-parser";
import * as fs from "fs";
import { Server, ServerConfig } from "./server";

const args = ArgParser(process.argv);

const isPathValid = (pathToValidate: string) => new Promise((resolve, reject) => {
    fs.access(path.resolve(pathToValidate), fs.constants.R_OK, (error) => {
        if (error) {
            console.error("Error while finding client code");
            console.error(error);
            console.error(`Path specified was ${path.resolve(args.clientPath)}`);
            reject(error);
        } else {
            resolve(isPathValid);
        }
    });
});

isPathValid(args.clientPath)
    .then(clientPath => {
        const appRoot = path.resolve(path.join(__dirname, ".."));

        const config = {
            appRoot,
            configDir: path.resolve(path.join(appRoot, "config")),
            swaggerFile: path.resolve(path.join(appRoot, "config", "swagger.json")),
            clientPath: args.clientPath
        };
        return config
    })
    .then(config => {
        const server = new Server(config);
        const port = process.env.PORT || 8080;
        server.start(port);
    });




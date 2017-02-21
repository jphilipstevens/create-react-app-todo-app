import express from 'express';
import bodyParser from 'body-parser';
import TodoRouter from './todo-router';
import Repository from "./repository";
import path from "path";
import morgan from "morgan";
import SwaggerExpress from "swagger-express-mw";
const app = express();

const config = {
    appRoot: __dirname,
    swaggerFile: __dirname + '/config/swagger.yaml'
};

SwaggerExpress.create(config, (err, swaggerExpress) => {
    if (err) {
        throw err;
    }

    swaggerExpress.register(app);
    app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    const router = express.Router();
    TodoRouter.apply(router, Repository);
    app.use('/api', router);
    // Serve static assets
    app.use(express.static(path.resolve(__dirname, '..', 'build')));

    const port = process.env.PORT || 8080;
    app.listen(port);

    console.log(`running the app on port ${port}`);
});









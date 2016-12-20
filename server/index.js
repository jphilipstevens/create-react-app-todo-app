import express from 'express';
import bodyParser from 'body-parser';
import TodoRouter from 'todo-router';
import Repository from "./repository";

const app        = express();    

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;        

const router = express.Router();
TodoRouter.apply(router, Repository);

app.use('/api', router);

app.listen(port);
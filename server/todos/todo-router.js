import payloadValidator from "payload-validator";
import * as HttpStatusCodes from "http-status-codes";

var expectedPayload = {
    "completed": "",
    "description": ""
};

const get = (repository) => (req, res) => {
    res.json(repository.getAllTodos());
};

const post = (repository) => (req, res) => {
    const result = payloadChecker.validator(req.body, expectedPayload, ["name", "message"], false);
    result.success
        ? res.status(HttpStatusCodes.CREATED).json(repository.addTodo(req.body))
        : res.status(HttpStatusCodes.UNPROCESSABLE_ENTITY).json({ "message": result.response.errorMessage });
};

const update = (repository) => (req, res) => {
    res.json({ update: repository.update(req.params.id, req.body) });
};

const TodoRouter = {};

TodoRouter.apply = (repository) => (router) => {
    router.get('/todos', get(repository));
    router.post('/todos', post(repository));
    router.put('/todos/:id', update(repository));
};


export default TodoRouter;
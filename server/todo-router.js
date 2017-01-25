const get = (repository) => (req, res) => {
    res.json(repository.getAllTodos());
};

const post = (repository) => (req, res) => {
    res.json(repository.addTodo(req.body));
};

const update = (repository) => (req, res) => {
    res.json({update: repository.update(req.params.id, req.body)});
};

const TodoRouter = {};

TodoRouter.apply = (router, repository) => {
    router.get('/todos', get(repository));
    router.post('/todos', post(repository));
    router.put('/todos/:id', update(repository));
};

export default TodoRouter;
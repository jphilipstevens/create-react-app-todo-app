const get = (repository) => (req, res) => {
    res.json(repository.getAllTodos());
};

const post = (repository) => (req, res) => {
    res.json(repository.addTodo(req.body));
};

const update = (repository) => (req, res) => {
    res.json({update: repository.update(req.body)});
};

const TodoRouter = {};

TodoRouter.apply = (router, repository) => {
    router.get('/', get(repository));
    router.post('/', post(repository));
};
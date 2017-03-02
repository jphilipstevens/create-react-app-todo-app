import TodoRouter from "./todo-router";
import Repository from "./repository";

export default () => {
    return TodoRouter.apply(Repository);
};

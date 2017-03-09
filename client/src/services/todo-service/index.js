import add from "./add";
import load from "./load";
import update from "./update";

const TodoService = (options) => ({
  add: add(options.baseUrl),
  update: update(options.baseUrl),
  load: load(options.baseUrl)
});

export default TodoService;

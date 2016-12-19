import add from "./add";
import load from "./load";

const TodoService = {
  add,
  load: () => Promise.resolve([{
    id: 1,
    text: "Todo 1",
    completed: false
  },
  {
    id: 2,
    text: "Todo 2",
    completed: true
  }])
};

export default TodoService;

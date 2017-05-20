package jono.todos;


import java.util.List;

/**
 * A DAO layer for getting Todos
 */
public interface TodoRepository {

    /**
     * get all available todos
     * @return a unmodifiable copy of all entries in the database
     */
    List<Todo> getAllTodos();

    Todo addTodo(boolean completed, String description);
}

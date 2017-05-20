package jono.todos;

import java.util.List;

/**
 * Created by jonathanstevens on 2017-05-19.
 */
public class TodosResponse {

    private final List<Todo> todos;

    public TodosResponse(List<Todo> todos) {
        this.todos = todos;
    }

    public List<Todo> getTodos() {
        return todos;
    }
}

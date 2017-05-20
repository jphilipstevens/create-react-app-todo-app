package jono.todos;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

/**
 * implements the Response Serialization
 */
@Component
public class TodoResponseSerializer implements ResponseSerializer {

    @Override
    public TodosResponse toResponse(List<Todo> todos){
        return new TodosResponse(todos);
    }

    @Override
    public TodosResponse toResponse(Todo todo) {
        final List<Todo> todos = new ArrayList<>();
        todos.add(todo);
        return new TodosResponse(todos);
    }
}

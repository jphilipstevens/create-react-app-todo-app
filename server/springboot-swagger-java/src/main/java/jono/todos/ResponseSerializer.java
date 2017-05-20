package jono.todos;

import java.util.List;

/**
 * A Transformation to allow creating TodoResponses
 *
 */
public interface ResponseSerializer {

    TodosResponse toResponse(List<Todo> todos);
    TodosResponse toResponse(Todo todo);
}

package jono.todos;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TodoController {
    private final TodoRepository repo;
    private final ResponseSerializer serializer;

    public TodoController(TodoRepository repo, ResponseSerializer serializer) {
        this.repo = repo;
        this.serializer = serializer;
    }


    @GetMapping(path = {"/api/todos"})
    @ApiOperation( code = 200,  value = "getTodos",  response = TodosResponse.class)
    @ApiResponses(value = {
            @ApiResponse(code = 404, message = "Not Found")
    })
    public TodosResponse getTodos(){
        final List<Todo> todos = repo.getAllTodos();
        return serializer.toResponse(todos);
    }

    @PostMapping(path = {"/api/todos"})
    @ApiOperation(code = 201, value = "addTodo", response = TodosResponse.class)
    @ApiResponses(value = {
            @ApiResponse(code = 404, message = "Not Found")
    })
    public TodosResponse addTodo(@RequestBody TodoRequest newTodoRequest) {
        final Todo todo = repo.addTodo(newTodoRequest.isCompleted(), newTodoRequest.getDescription());
        return serializer.toResponse(todo);
    }

}

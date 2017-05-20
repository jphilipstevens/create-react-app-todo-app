package jono.todos

import io.swagger.annotations.{ApiOperation, ApiResponse, ApiResponses}
import org.springframework.web.bind.annotation._

@RestController
class TodoController(repo: TodoRespository) {


  @GetMapping(path = Array("/api/todos"))
  @ApiOperation(value = "getTodos")
  @ApiResponses(Array.apply(
    new ApiResponse(code = 200, message = "Success", response = classOf[TodosResponse]),
    new ApiResponse(code = 404, message = "Not Found")
  ))
  def getTodos(): TodosResponse = {
    val todos = repo.getTodos()
    toResponse(todos)
  }

  @PostMapping(path = Array("/api/todos"))
  @ApiOperation(value = "addTodo")
  @ApiResponses(Array.apply(
    new ApiResponse(code = 201, message = "Success", response = classOf[TodosResponse]),
    new ApiResponse(code = 404, message = "Not Found")
  ))
  def addTodo(@RequestBody newTodoRequest: TodoRequest): TodosResponse = {
    val todo = repo.addTodo(newTodoRequest.completed, newTodoRequest.description)
    toResponse(List(todo))
  }


}

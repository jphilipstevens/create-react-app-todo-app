package jono.todos

import io.swagger.annotations.{Api, ApiOperation, ApiResponse, ApiResponses}
import org.springframework.web.bind.annotation.{GetMapping, RequestMapping, RequestMethod, RestController}

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
}

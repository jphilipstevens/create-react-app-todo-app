package jono.todos

case class TodosResponse(todos: List[Todo])

object toResponse {
  def apply(todos: List[Todo]): TodosResponse = TodosResponse(todos)
}

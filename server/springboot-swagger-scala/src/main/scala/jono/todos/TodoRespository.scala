package jono.todos

trait TodoRespository {

  def getTodos(): List[Todo]

  def addTodo(completed: Boolean, description: String): Todo

}

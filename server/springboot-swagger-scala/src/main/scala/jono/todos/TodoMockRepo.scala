package jono.todos

import java.util.UUID

import org.springframework.stereotype.Repository

import scala.collection.mutable

@Repository
class TodoMockRepo extends TodoRespository {
  val database = mutable.MutableList(
    Todo(
      id = Some(UUID.randomUUID().toString),
      completed = true,
      description = "Create A React App with API"
    )
  )

  override def getTodos(): List[Todo] = database.toList

  override def addTodo(completed: Boolean, description: String): Todo = {
    val todo = Todo(
      id = Some(UUID.randomUUID().toString),
      completed,
      description
    )
    database += todo
    todo
  }
}
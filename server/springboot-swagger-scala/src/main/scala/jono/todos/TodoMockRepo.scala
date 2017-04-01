package jono.todos

import java.util.UUID

import org.springframework.stereotype.Repository

@Repository
class TodoMockRepo extends TodoRespository {
  val database: List[Todo] = List(
    Todo(
      id = Some(UUID.randomUUID().toString),
      completed = true,
      description = "Create A React App with API"
    )
  )

  override def getTodos(): List[Todo] = database
}

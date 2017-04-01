package jono.todos

trait TodoRespository {

  def getTodos(): List[Todo]

}

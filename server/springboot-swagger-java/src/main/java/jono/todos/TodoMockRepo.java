package jono.todos;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.UUID;

@Repository
public class TodoMockRepo implements TodoRepository {

    private final List<Todo> database;

    private List<Todo> seedDatabase() {
        final List<Todo> seededDatabase = new ArrayList<>();
        seededDatabase.add(
                new Todo(
                        UUID.randomUUID().toString(),
                        true,
                        "Create A React App with API"

                )
        );
        return seededDatabase;
    }

    public TodoMockRepo() {
        this.database = seedDatabase();
    }


    @Override
    public List<Todo> getAllTodos() {
        return Collections.unmodifiableList(this.database);
    }

    @Override
    public Todo addTodo(boolean completed, String description) {
        final Todo todo = new Todo(UUID.randomUUID().toString(), completed, description);
        this.database.add(todo);
        return todo;
    }
}

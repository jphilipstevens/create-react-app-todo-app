package jono.todos;


import java.util.Optional;

public class Todo {
    private final Optional<String> id;
    private final boolean completed;
    private final String description;


    public Todo(String id, boolean completed, String description) {
        this.id = Optional.of(id);
        this.completed = completed;
        this.description = description;
    }

    public Todo(boolean completed, String description) {
        this.id = Optional.empty();
        this.completed = completed;
        this.description = description;
    }

    public Optional<String> getId() {
        return id;
    }

    public boolean isCompleted() {
        return completed;
    }

    public String getDescription() {
        return description;
    }
}

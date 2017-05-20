package jono.todos;

/**
 * A Request for new Todos
 */
public class TodoRequest {

    private boolean completed;
    private String description;

    public TodoRequest() {
        this.completed = false;
        this.description = null;
    }

    public TodoRequest(boolean completed, String description) {
        this.completed = completed;
        this.description = description;
    }

    public boolean isCompleted() {
        return completed;
    }

    public String getDescription() {
        return description;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

export const createTodo = (id = "", completed = false, description = "") => {
    return {
        id,
        completed,
        description
    };
};
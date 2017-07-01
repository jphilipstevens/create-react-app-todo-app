import { Todo } from "../types";

export const createTodo = (id: string = "", completed: boolean = false, description: string = ""): Todo => {
    return {
        id,
        completed,
        description
    };
};
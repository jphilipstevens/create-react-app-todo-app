import { expect } from "chai";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { toggleTodo, loadTodos, addTodo } from "../../src/action-creators/todo";
import TodoActions from "../../src/actions/todo";

const initialTodos = [{
    id: 'd399d53b-1b0e-4cc5-8a6d-234edc51fe69',
    completed: false,
    description: 'start a Todo React App'
},
{
    id: 'd399d53b-1b0e-4cc5-8a6d-234edc51fe69',
    completed: false,
    description: 'start a Todo React App'
}];

const sucessfulServices = {
    todoService: {
        load: () => Promise.resolve(initialTodos),
        update: () => Promise.resolve({}),
        add: ({text, completed}) => Promise.resolve({id: "1", completed, description: text})
    }
};

const mockStoreSuccessfulServices = configureMockStore([thunk.withExtraArgument(sucessfulServices)]);

const FailedServices = {
    todoService: {
        load: () => Promise.reject([]),
        update: () => Promise.reject({}),
        add: () => Promise.reject({})
    }
};

const mockStoreFailedServices = configureMockStore([thunk.withExtraArgument(FailedServices)]);

describe("todo action creators", () => {
    describe("toggleTodo", () => {
        it("should update a todo properly", () => {
            const todo = {
                id: 'd399d53b-1b0e-4cc5-8a6d-234edc51fe69',
                completed: false,
                description: 'start a Todo React App'
            };

            const store = mockStoreSuccessfulServices({
                todos: [todo],
                isLoading: false
            });
            const expectedActions = [
                { type: TodoActions.LOADING, meta: true },
                { type: TodoActions.LOADING, meta: false },
                { type: TodoActions.ERROR, meta: false },
                {
                    type: TodoActions.TOGGLE,
                    meta: { todoId: todo.id }
                }
            ];

            return store.dispatch(toggleTodo(todo))
                .then(() => {
                    const actions = store.getActions();
                    expect(actions).to.deep.equal(expectedActions);
                });
        });

        it("should set an error flag when the update fails", () => {
            const todo = {
                id: 'd399d53b-1b0e-4cc5-8a6d-234edc51fe69',
                completed: false,
                description: 'start a Todo React App'
            };

            const store = mockStoreFailedServices({
                todos: [todo],
                isLoading: false
            });
            const expectedActions = [
                { type: TodoActions.LOADING, meta: true },
                { type: TodoActions.LOADING, meta: false },
                { type: TodoActions.ERROR, meta: true }
            ];

            return store.dispatch(toggleTodo(todo))
                .then(() => {
                    const actions = store.getActions();
                    expect(actions).to.deep.equal(expectedActions);
                });
        });
    });

    describe("loadTodos", () => {
        it("should load all todos properly", () => {
            const store = mockStoreSuccessfulServices({
                todos: [],
                isLoading: false
            });
            const expectedActions = [
                { type: TodoActions.LOADING, meta: true },
                { type: TodoActions.LOADING, meta: false },
                { type: TodoActions.ERROR, meta: false },
                {
                    type: TodoActions.LOAD,
                    payload: initialTodos
                }
            ];

            return store.dispatch(loadTodos())
                .then(() => {
                    const actions = store.getActions();
                    expect(actions).to.deep.equal(expectedActions);
                });
        });

        it("should set an error flag when the load fails", () => {
          
            const store = mockStoreFailedServices({
                todos: [],
                isLoading: false
            });
            const expectedActions = [
                { type: TodoActions.LOADING, meta: true },
                { type: TodoActions.LOADING, meta: false },
                { type: TodoActions.ERROR, meta: true }
            ];

            return store.dispatch(loadTodos())
                .then(() => {
                    const actions = store.getActions();
                    expect(actions).to.deep.equal(expectedActions);
                });
        });
    });

        describe("addTodos", () => {
        it("should add a todo", () => {
            const store = mockStoreSuccessfulServices({
                todos: [],
                isLoading: false
            });
            const expectedActions = [
                { type: TodoActions.LOADING, meta: true },
                { type: TodoActions.LOADING, meta: false },
                { type: TodoActions.ERROR, meta: false },
                {
                    type: TodoActions.ADD,
                    payload: { id: "1", completed: false, description: "foo" }
                }
            ];

            return store.dispatch(addTodo("foo"))
                .then(() => {
                    const actions = store.getActions();
                    expect(actions).to.deep.equal(expectedActions);
                });
        });

        it("should set an error flag when the load fails", () => {
          
            const store = mockStoreFailedServices({
                todos: [],
                isLoading: false
            });
            
            const expectedActions = [
                { type: TodoActions.LOADING, meta: true },
                { type: TodoActions.LOADING, meta: false },
                { type: TodoActions.ERROR, meta: true }
            ];

            return store.dispatch(addTodo("foo"))
                .then(() => {
                    const actions = store.getActions();
                    expect(actions).to.deep.equal(expectedActions);
                });
        });
    });
});

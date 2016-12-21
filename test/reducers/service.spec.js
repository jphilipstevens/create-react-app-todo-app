import { expect } from "chai";
import reducers from "../../src/reducers";
import Actions from "../../src/actions/todo";

describe("reducers", () => {
  it("should handle actions with an empty action", () => {
    const state = reducers({ todos: [], isLoading: false }, {});
    expect(state).to.deep.equal({ todos: [], isLoading: false });
  });

  it("should handle load error", () => {
    const action = {
      type: Actions.LOAD,
      payload: [{
        id: "1",
        text: "Todo 1",
        completed: false
      }]
    };

    const expectedState = {
      todos: [{
        id: "1",
        text: "Todo 1",
        completed: false
      }],
      isLoading: false
    };

    const state = reducers({ todos: [], isLoading: false }, action);
    expect(state).to.deep.equal(expectedState);
  });

  it("should set isLoading ", () => {
    const action = {
      type: Actions.LOADING,
      meta: true
    };

    const expectedState = { todos: [], isLoading: true };
    const state = reducers({ todos: [], isLoading: false }, action);
    expect(state).to.deep.equal(expectedState);
  });

  it("should update a todo ", () => {
    const action = {
      type: Actions.TOGGLE,
      meta: { todoId: "1" }
    };

    const initialState = {
      todos: [{
        id: "1",
        text: "Todo 1",
        completed: false
      },
      {
        id: "2",
        text: "Todo 2",
        completed: false
      }],
      isLoading: false
    };

    const expectedState = {
      todos: [
        {
          id: "2",
          text: "Todo 2",
          completed: false
        },
        {
          id: "1",
          text: "Todo 1",
          completed: true
        }],
      isLoading: false
    };

    const state = reducers(initialState, action);
    expect(state).to.deep.equal(expectedState);
  });
  it("should add a Todo ", () => {
    const action = {
      type: Actions.ADD,
      payload: {
        id: "1",
        text: "Todo 1",
        completed: false
      }
    };

    const initialState = { todos: [], isLoading: false };

    const expectedState = {
      todos: [{
        id: "1",
        text: "Todo 1",
        completed: false
      }],
      isLoading: false
    };
    const state = reducers(initialState, action);
    expect(state).to.deep.equal(expectedState);
  });
});
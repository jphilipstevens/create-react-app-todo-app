import expect from "expect";
import reducers from "../../src/reducers";
import Actions from "../../src/actions/todo";

describe("reducers", () => {
  it("should handle actions", () => {
    let state;
    state = reducers({todos:[],service:{}}, {});
    expect(state).toEqual({todos:[],service:{}});
  });

  it("should handle load error", () => {
    let state;
    state = reducers({todos:[],service:{}}, {type: Actions.LOAD_ERROR, payload: {error: "Error"}});
    expect(state).toEqual({todos:[],service:{error: "Error"}});
  });
});
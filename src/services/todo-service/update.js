import handleJsonResponse from "../handle-json-response";

const createOptions = (body) => ({
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  method: "PUT",
  body: JSON.stringify(body)
});

const add = (baseUrl) => (todo) => {
  const options = createOptions(todo);

  return fetch(`${baseUrl}/api/todos/${todo.id}`, options)
    .then(handleJsonResponse);
};

export default add;

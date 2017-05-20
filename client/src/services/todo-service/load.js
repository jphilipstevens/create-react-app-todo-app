import handleJsonResponse from "../handle-json-response";

const options = {
  headers: {
    "Accept": "application/json"
  },
  method: "GET"
};

const load = (baseUrl) => () => {
  
  return fetch(`${baseUrl}/api/todos/`, options)
    .then(handleJsonResponse)
    .then(response => response.todos);
};

export default load;

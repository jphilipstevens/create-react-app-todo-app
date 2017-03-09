import handleJsonResponse from "../handle-json-response";

const options = {
  headers: {
    "Accept": "application/json"
  },
  method: "GET"
};

const load = (baseUrl) => () => {
  
  return fetch(`${baseUrl}/api/todos/`, options)
    .then(handleJsonResponse);
};

export default load;

import handleJsonResponse from "../handle-json-response";

const options = {
  headers: {
    "Accept": "application/json"
  },
  method: "GET"
};

const load = () => {
  
  return fetch("/api/todos/", options)
    .then(handleJsonResponse);
};

export default load;

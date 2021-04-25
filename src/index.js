import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GraphQLClient, ClientContext } from "graphql-hooks";

const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    Authorization: "Bearer 3bca894682dadd5097d4e3a54a418d"
  }
});

ReactDOM.render(
  <ClientContext.Provider value={client}>
    <App />
  </ClientContext.Provider>,
  document.getElementById("root")
);

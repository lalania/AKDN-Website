import React from "react";
import StandardPage from "./pages/StandardPage";
import DesktopNavHeader from "./components/DesktopNavHeader.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useQuery } from "graphql-hooks";

const TAGS_QUERY = `query Tags {
  allTags {
    id
    title
    tagSlug
  }
}`;

export default function App() {
  const { loading, error, data } = useQuery(TAGS_QUERY, {
    variables: {
      limit: 1000
    }
  });
  if (loading) return "";
  if (error) return "Something Bad Happened";
  //console.log(data);
  var tags = data.allTags;

  return (
    <Router tags={tags}>
      <DesktopNavHeader tags={tags} />
      <main tags={tags}>
        <Route
          path="/*"
          render={props => <StandardPage {...props} tags={tags} />}
        />
      </main>
    </Router>
  );
}

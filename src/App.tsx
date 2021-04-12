import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";

import MainPage from "./pages/Main";
function App() {
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <MainPage />
      </QueryParamProvider>
    </Router>
  );
}

export default App;

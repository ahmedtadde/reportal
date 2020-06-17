import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import LoginPage from "@views/login.page";
import HomePage from "@views/home.page";
import AppsPage from "@views/apps.page";
import ConsolePage from "@views/console.page";

const routesconf = [
  { path: "/", element: <HomePage /> },
  { path: "login", element: <LoginPage /> },
  { path: "apps", element: <AppsPage /> },
  { path: "console", element: <ConsolePage /> },
];

const Routes: React.FC = () => {
  return useRoutes(routesconf);
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;

import React from "react";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import PropTypes from "prop-types";

function AuthenticatedRoute({ children }) {
  return <>{children}</>;
}

AuthenticatedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

function AppRoutes() {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        {routes.map((route, index) => (
          <Route
            exact
            path={route.path}
            element={
              route.protected ? (
                <AuthenticatedRoute>{route.component}</AuthenticatedRoute>
              ) : (
                route.component
              )
            }
            key={index}
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;

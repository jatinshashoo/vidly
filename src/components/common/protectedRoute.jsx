import React, { Component } from "react";
import auth from "../../services/authService";
import { Route, Redirect } from "react-router-dom";
import MovieForm from "../../components/movieForm";

const ProtectedRoute = ({ component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!auth.getCurrentUser()) return <Redirect to="/login" />;
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;

import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
  useHistory,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';
import Main from '../pages/Main';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { isLogged } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!isLogged ? (
          isLogged ? (
            <Main Component={Component} />
          ) : (
            <Component />
          )
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;

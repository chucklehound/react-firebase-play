import React from 'react';
import { NavLink } from "react-router-dom";
import './navigation.scss'

import Header from '../elements/header/header';
import SignOutButton from '../SignOut';
import { AuthUserContext } from '../Session';

import * as ROUTES from '../constants/routes';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);
const NavigationAuth = () => (
  <Header>
    <span className="app-logo"><span className="visually-hidden">Onic</span></span>
    <div className="app-navigation">
      <ul>
        <li>
          <NavLink activeClassName='is-active' exact to={ROUTES.LANDING}>Landing</NavLink>
        </li>
        <li>
          <NavLink activeClassName='is-active' to={ROUTES.HOME}>Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName='is-active' to={ROUTES.ACCOUNT}>Account</NavLink>
        </li>
        <li>
          <SignOutButton />
        </li>
      </ul>
    </div>
  </Header>
);

const NavigationNonAuth = () => (
  <Header>
    <span className="app-logo"><span className="visually-hidden">Onic</span></span>
    <div className="app-navigation">
      <ul>
        <li>
          <NavLink activeClassName='is-active' exact to={ROUTES.LANDING}>Landing</NavLink>
        </li>
        <li>
          <NavLink activeClassName='is-active' to={ROUTES.SIGN_IN}>Sign In</NavLink>
        </li>
      </ul>
  </div>
  </Header>
);

export default Navigation;

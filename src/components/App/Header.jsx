import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import {logout, isLogin} from '../../api/auth';

const UserDropdown = withRouter(props => {
  return (
      <li className="dropdown">
          <a
              className="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-expanded="false">
              Admin <span className="caret" />{' '}
          </a>
          <ul className="dropdown-menu">
              <li>
                  <a
                      onClick={e => {
                          e.preventDefault();
                          logout();
                          props.history.replace('/login');
                      }}>
                      Log out
                  </a>
              </li>
              {// <li>
              //     <a>Setting</a>
              // </li>
              }
          </ul>
      </li>
  );
});

const DropDown = withRouter(UserDropdown);
export default class header extends React.Component {
  render() {
    return (
      <div className="body__header">
        <header className="header-container">
          <ul className="header__left">
            <li ><img className="header__logo" src={logo} alt="logo" /></li>
            <li >Hub</li>
          </ul>
          <nav>
          <ul className="header__right">
            <li ><Link to="/" >Home</Link></li>
            <li ><Link to="/register" >Register</Link></li>
            {isLogin() ? (
              <UserDropdown />
          ) : (
              <li>
                  <Link to="/login">login</Link>
              </li>
          )}
          </ul>
          </nav>
        </header>
        </div>
    );
  }
}

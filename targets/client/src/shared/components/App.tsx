import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import InvalidRoute from '@/shared/components/InvalidRoute';
import { default as Screens } from '@/screens';

const App: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/Home">
            conduit
          </a>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <NavLink className="nav-link ion-compose" to="/editor">
                &nbsp;New Post
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                Sign-Up
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/settings">
                Settings
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/home" element={<Screens.HomeComponent />} />
        <Route path="/" element={<Screens.HomeComponent />} />
        <Route path="*" element={<InvalidRoute />} />
      </Routes>
    </>
  );
};

export default App;

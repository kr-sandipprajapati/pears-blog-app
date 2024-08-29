import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <div className="Icons--logo-64" />
      </Link>
      <Link to="/add-blog" className="Header--add-blog">
        Add Blog
      </Link>
      <Outlet />
    </div>
  );
}

import { Outlet, Link } from 'react-router-dom';
import React from 'react';
// import m0 from '../images/00b.jpeg';




const Layout = () => {
  return (
    <>
      <nav className="px-8 py-4 fixed bg-gray-800 w-full flex justify-center items-center text-bold"
        >
       
        <ul className="flex space-x-4 text-white">

          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Services" className="hover:text-gray-300">
              Services
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-gray-300">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/Login" className="hover:text-gray-300">
              Login
            </Link>
          </li>
          <li>
            <Link to="/Upload" className="hover:text-gray-300">
              Upload
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;

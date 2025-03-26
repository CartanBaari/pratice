import React from "react";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  return (
    <div className="flex justify-between shadow-md py-6 z-20 bg-white">
      <div className="flex space-x-5">
        
        <img src="/images/logo.png" alt="Logo" className="h-12" />

        
        <nav className="hidden lg:flex">
          <ul className="flex space-x-6 mt-3 text-2xl">
            <li className="hover:text-[#439ae7]">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[#439ae7]">
              <Link to="/pages">Pages</Link>
            </li>
            <li className="hover:text-[#439ae7]">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className="hover:text-[#439ae7]">
              <Link to="/courses">Courses</Link>
            </li>
            <li className="hover:text-[#439ae7]">
              <Link to="/events">Events</Link>
            </li>
            <li className="hover:text-[#439ae7]">
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
      </div>

      
      <div className="hidden lg:flex bg-[#439ae7] px-5 py-2 rounded-full items-center hover:opacity-50">
        <button className="flex space-x-2">
          <Link className="text-center text-xl text-white" to="/get-started">
            Get Started
          </Link>
        </button>
      </div>

     
      <div>
        <img className="w-8 mr-10 lg:hidden" src="/images/menu.png" alt="Menu" />
      </div>
    </div>
  );
};

export default Navbar;

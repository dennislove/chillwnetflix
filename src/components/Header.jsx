import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSearch, FaBell, FaUser, FaBars } from 'react-icons/fa';

const Header = ({ onSearch }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleProfileDropdown = () =>
    setIsProfileDropdownOpen(!isProfileDropdownOpen);

  const [search, setSearch] = useState('');
  return (
    <header className="bg-black text-white py-2 px-10 relative">
      <div className="flex items-center justify-between">
        <button
          className="lg:hidden text-2xl"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <FaBars />
        </button>

        <div className="flex items-center space-x-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZhYUrmk6vDmi1-Pj7oI-HzTpQDCi9-IFTA&s"
            alt="Company Logo"
            className="h-8 w-auto"
          />
          <h1 className="text-xl font-bold md:block hidden">
            Chill with Netflix
          </h1>
        </div>

        <nav
          className={`lg:flex ${
            isNavOpen ? 'flex' : 'hidden'
          } flex-col lg:flex-row absolute lg:relative top-full gap-10 left-0 w-full lg:w-auto bg-black lg:bg-transparent z-10`}
        >
          <a href="#" className="p-2 hover:text-red-500 font-semibold">
            Home
          </a>
          <a href="#" className="p-2 hover:text-red-500 font-semibold">
            About Us
          </a>
          <a href="#" className="p-2 hover:text-red-500 font-semibold">
            Services
          </a>
          <a href="#" className="p-2 hover:text-red-500 font-semibold">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 p-2 text-black"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="bg-red-700 text-white px-3 py-1 rounded-lg"
            onClick={() => onSearch(search)}
          >
            Search
          </button>

          <div className="relative">
            <button
              onClick={toggleProfileDropdown}
              className="flex items-center space-x-2"
              aria-label="User Profile"
            >
              <FaUser className="text-2xl" />
            </button>
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-10">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50">
          <div className="fixed inset-y-0 left-0 w-64 bg-black p-4">
            <button
              onClick={toggleSidebar}
              className="absolute top-4 right-4 text-white"
              aria-label="Close Sidebar"
            >
              &times;
            </button>
            <nav className="mt-8 space-y-4">
              <a
                href="#"
                className="block text-white hover:bg-white rounded-lg hover:text-red-500 p-2"
              >
                Home
              </a>
              <a
                href="#"
                className="block text-white hover:bg-white rounded-lg hover:text-red-500 p-2"
              >
                About Us
              </a>
              <a
                href="#"
                className="block text-white hover:bg-white rounded-lg hover:text-red-500 p-2"
              >
                Services
              </a>
              <a
                href="#"
                className="block text-white hover:bg-white rounded-lg hover:text-red-500 p-2"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default Header;

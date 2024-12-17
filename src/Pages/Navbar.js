import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import companyImage from '../assets/logo-white.png';
import mobileMenu from '../assets/logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="text-white mb-6 p-4 font-font">
      <div className="container mx-auto flex justify-between lg:justify-around items-center">
        {/* Company Logo */}
        <img src={companyImage} alt="Company Logo" className="lg:w-48 w-36 h-auto mb-3" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-3 lg:space-x-10">
          {['Home', 'Product', 'About us', 'Gallery', 'Contact us'].map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                className="lg:text-lg text-sm lg:font-bold hover:text-[#47b32d]" >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Profile Button and Hamburger Menu Button */}
        <div className="space-x-4 mb-3 flex items-center">
          {/* User Profile Button */}
          <button
            aria-label="User profile"
            className="border-solid border-[1px] bg-gray-700 h-12 w-12 hidden lg:flex items-center justify-center rounded-full hover:bg-[#47b32d] transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faUser} className="text-lg lg:text-2xl" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="border-solid border-[1px] hover:text-gray-300 h-12 w-12 flex items-center justify-center rounded-full bg-[#47b32d] transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <FontAwesomeIcon icon={faBars} className="text-lg lg:text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white absolute inset-y-0 left-0 w-3/4 text-black p-4">
          <div className="relative">
            {/* Close Button */}
            <button onClick={closeMenu} className="absolute top-4 right-4 text-black text-3xl">
              <FontAwesomeIcon icon={faTimes} />
            </button>
            {/* Mobile Menu Image */}
            <img src={mobileMenu} alt="Mobile Menu" className="h-12 mb-4" />
          </div>

          {/* Menu Links */}
          {['Home', 'Services', 'Contact', 'About'].map((link, idx) => (
            <div key={idx}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block py-2 text-black hover:text-[#47b32d]"
              >
                {link}
              </a>
              {idx < 3 && <hr className="my-2 border-t-2 border-gray-300" />}
            </div>
          ))}
        </div>
      )}

      <div className="line bg-gray-600 h-px w-full my-2"></div>
    </nav>
  );
}

export default Navbar;

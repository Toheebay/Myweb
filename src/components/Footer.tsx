
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-purple-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-300">Modern Website</h3>
            <p className="text-gray-300">
              A beautifully crafted website with modern design and responsive layout.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-purple-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-purple-300 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-purple-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-300">Contact</h3>
            <address className="not-italic text-gray-300">
              <p>Block 331 Jakande Estate</p>
              <p>Lagos, Nigeria</p>
              <p className="mt-2">
                Email: <a href="mailto:adebayoajani23@gmail.com" className="hover:text-purple-300 transition-colors">adebayoajani23@gmail.com</a>
              </p>
              <p>
                Phone: <a href="tel:+2347067412852" className="hover:text-purple-300 transition-colors">+234 706 741 2852</a>
              </p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Modern Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

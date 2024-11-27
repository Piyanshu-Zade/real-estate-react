import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = ({ onContactClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuLinks = [
    { id: "Home", href: "Header" },
    { id: "About", href: "About" },
    { id: "Facilities", href: "Facilities" },
    { id: "Projects", href: "Projects" },
    { id: "Testimonials", href: "Testimonials" },
  ];

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        {/* Logo */}
        <img src="/images/logo.svg" alt="Logo" className="w-24" />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-7 text-white">
          {menuLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.href}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-orange-500 font-semibold"
              >
                {link.id}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Contact Us Button */}
        <Link
          to="Footer"
          className="hidden md:block text-white bg-orange-500 px-4 py-1 rounded-full hover:bg-white hover:text-orange-500 font-semibold"
          aria-label="Contact Us"
          smooth={true}
          duration={1000}
          onClick={onContactClick}
        >
          Contact Us
        </Link>

        {/* Mobile Menu Icon */}
        <img
          src="/images/menu_icon.svg"
          alt="Open Menu"
          className="md:hidden w-7 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close Mobile Menu" : "Open Mobile Menu"}
        />
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="items-center md:hidden bg-white text-gray-900 absolute top-16 left-0 w-full shadow-lg">
          <ul className="flex flex-col items-center gap-4 py-6 px-6">
            {menuLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.href}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-orange-500 font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                >
                  {link.id}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-6 mb-10">
            <Link
              to="Footer"
              className="block text-white bg-orange-500 px-4 py-2 rounded-full text-center hover:bg-white hover:text-orange-500 font-semibold"
              aria-label="Contact Us"
              smooth={true}
              duration={1000}
              onClick={() => {
                setIsMobileMenuOpen(false); // Close menu on button click
                onContactClick();
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

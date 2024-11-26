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
        <img src="/images/logo.svg" alt="Logo" className="w-24" />

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

        <Link to={"Footer"}
          className="hidden md:block text-white bg-orange-500 px-4 py-1 rounded-full hover:bg-white hover:text-orange-500 font-semibold"
          aria-label="Contact Us" 
          smooth={true}
          duration={1000}
          onClick={onContactClick}
        >
          Contact Us
        </Link>

        <img
          src="/images/menu_icon.svg"
          alt="Open Menu"
          className="md:hidden w-7 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open Mobile Menu"
        />
      </div>
    </div>
  );
};

export default Navbar;

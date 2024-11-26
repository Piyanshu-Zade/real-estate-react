import React from 'react';

const Footer = () => {
  return (
    <div className="footer bg-gray-900 text-white py-16" id="Footer">
      <div className="footer_wrap container mx-auto px-6 md:px-32">
        {/* Footer Columns (flex) */}
        <div className="flex flex-wrap justify-between space-y-8 md:space-y-0 md:flex-row">

          {/* First Column */}
          <div className="footer_col w-full md:w-1/4">
            <div className="flex justify-start items-center pt- 5 bg-transparent">
              {/* Logo */}
              <img src="/images/logo.svg" alt="Logo" className="w-24" />
            </div>
            <ul>
              <li className="flex items-center mb-3 pt-5">
                <i className="bx bxs-location-plus mr-2"></i>
                <p className="text-gray-400">Manish Nagar, Nagpur</p>
              </li>
              <li className="flex items-center mb-3">
                <i className="bx bxs-phone-call mr-2"></i>
                <p className="text-gray-400">+91 8624856258</p>
              </li>
              <li className="flex items-center mb-3">
                <i className="bx bxs-envelope mr-2"></i>
                <p className="text-gray-400">xyz@gmail.com</p>
              </li>
              <ul className="flex space-x-4 text-2xl mt-4">
                <li>
                  <a href="https://www.facebook.com" className="hover:text-orange-500">
                    <i className="bx bxl-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com" className="hover:text-orange-500">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com" className="hover:text-orange-500">
                    <i className="bx bxl-instagram-alt"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.telegram.org" className="hover:text-orange-500">
                    <i className="bx bxl-telegram"></i>
                  </a>
                </li>
              </ul>
            </ul>
          </div>

          {/* Second Column - Company */}
          <div className="footer_col w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Our Company</h4>
            <ul>
              <li className="mb-3 text-gray-400">About Us</li>
              <li className="mb-3 text-gray-400">Blog</li>
              <li className="mb-3 text-gray-400">All Products</li>
              <li className="mb-3 text-gray-400">FAQ</li>
              <li className="text-gray-400">Contact Us</li>
            </ul>
          </div>

          {/* Third Column - Services */}
          <div className="footer_col w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul>
              <li className="mb-3 text-gray-400">Cart</li>
              <li className="mb-3 text-gray-400">With List</li>
              <li className="mb-3 text-gray-400">Login</li>
              <li className="mb-3 text-gray-400">Check Out</li>
              <li className="mb-3 text-gray-400">Terms & Conditions</li>
              <li className="text-gray-400">Promotional Offers</li>
            </ul>
          </div>

          {/* Fifth Column - Newsletter */}
          <div className="footer_col w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
            Stay updated with the latest property listings and exclusive offers.
            </p>
            <div className="email_box flex mb-4">
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className="p-3 rounded-l-lg w-full text-gray-800"
              />
              <button className="btn p-3 bg-orange-500 text-white rounded-r-lg">
                <i className="bx bxl-telegram"></i>
              </button>
            </div>
            <h4 className="text-lg font-semibold mb-4">We Accept</h4>
            <img src="/images/payment-4.png" alt="Payment Methods" className="w-full" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;

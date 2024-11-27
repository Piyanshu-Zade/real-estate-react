import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div
      className="relative min-h-screen mb-4 bg-cover bg-center flex flex-col justify-center items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/images/background_home.png')" }}
      id="Header"
    >
      {/* Transparent Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55 z-0"></div>

      <Navbar />

      <div className="relative container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white z-8">
        <h2 className="text-4xl font-bold mb-4">Unlock the Door to Your <span className='text-orange-500'>Perfect Home.</span></h2>

        <div className="flex justify-center gap-4">
          <Link to={"Projects"} smooth={true} duration={500} className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:text-orange-500 hover:bg-white font-semibold cursor-pointer">
            Project
          </Link>
          <Link to={"Footer"} smooth={true} duration={500}  className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:text-orange-500 hover:bg-white font-semibold cursor-pointer" >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

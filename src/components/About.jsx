import React from 'react';

const About = () => {
  return (
    <div
      className="container flex flex-col items-center justify-center mx-auto px-6 py-14 md:px-32 w-full overflow-hidden"
      id="About"
    >
      {/* Heading */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-gray-900 text-center">
        About <span className="underline underline-offset-4 decoration-2 text-orange-500">Our Brand</span>
      </h1>

      {/* Subheading */}
      <p className="text-gray-600 max-w-lg text-center mb-10">
        Passionate About Property, Dedicated to Your Vision.
      </p>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Image Section */}
        <img
          src="/public/images/About_logo6.png"
          alt="About Us"
          className="w-full sm:w-1/2 max-w-lg rounded-lg "
        />

        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start text-gray-900">
          {/* Bullet Points */}
          <div className="flex flex-col gap-6 mb-6">
            <p className="text-lg font-medium">
              <span className="text-orange-500 font-semibold">10+ Years of Excellence: </span> Proven expertise in delivering top-tier real estate solutions.
            </p>
            <p className="text-lg font-medium">
              <span className="text-orange-500 font-semibold">Extensive Network: </span> Access to a wide range of properties and trusted industry contacts.
            </p>
            <p className="text-lg font-medium">
              <span className="text-orange-500 font-semibold">Client-Focused Approach: </span> Dedicated to turning your property dreams into reality.
            </p>
            <p className="text-lg font-medium">
              <span className="text-orange-500 font-semibold">Tailored Services:</span> Customized solutions for first-time buyers, investors, and sellers.
            </p>
            <p className="text-lg font-medium">
              <span className="text-orange-500 font-semibold">Expert Insights: </span> Offering valuable advice based on market research and trends.
            </p>
            <p className="text-lg font-medium">
              <span className="text-orange-500 font-semibold">Seamless Transactions: </span> Ensuring smooth negotiations and paperwork processes.
            </p>
          </div>

          {/* Button */}
          <button className="text-white bg-orange-500 px-8 py-3 rounded-full hover:bg-orange-600 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

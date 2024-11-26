import React from 'react';

const Projects = () => {
  return (
    <div
      className="container flex flex-col items-center justify-center mx-auto px-6 py-14 md:px-32 w-full overflow-hidden"
      id="Projects"
    >
      {/* Heading */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-gray-900 text-center">
        Projects <span className="underline underline-offset-4 decoration-2 text-orange-500">Ongoing</span>
      </h1>

      {/* Subheading */}
      <p className="text-gray-600 max-w-2xl mx-auto text-center mb-10">
        Discover ongoing property projects that cater to diverse lifestyles with modern designs and exceptional amenities.
      </p>

      {/* Apartment Main Content */}
      <div className="apartment-main flex flex-col md:flex-row gap-2 md:gap-8 mt-8 justify-center items-center">
        {/* Apartment Content */}
        <div className="apartment-content flex-1 px-10 py-5 bg-[#f2f4f5]">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">The Studio</h2>
          <p className="text-gray-900 mb-4">
            Explore The Studio, a sophisticated living space blending modern design with luxury amenities. Offering open layouts, premium finishes, and smart features, it’s the perfect choice for contemporary living and comfort.
          </p>
          <ul className="apartment-list space-y-3">
            <li className="flex justify-between pb-2">
              <span className="font-semibold">Total Area</span>
              <span className="text-gray-700">2800 Sq. Ft</span>
            </li>
            <li className="flex justify-between pb-2 ">
              <span className="font-semibold">Living Area</span>
              <span className="text-gray-700">105 Sq. Ft</span>
            </li>
            <li className="flex justify-between pb-2 ">
              <span className="font-semibold">Bedroom</span>
              <span className="text-gray-700">45 Sq. Ft</span>
            </li>
            <li className="flex justify-between pb-2 ">
              <span className="font-semibold">Balcony</span>
              <span className="text-gray-700">Allowed</span>
            </li>
            <li className="flex justify-between pb-2 ">
              <span className="font-semibold">Lounge</span>
              <span className="text-gray-700">650 Sq. Ft</span>
            </li>
          </ul>
        </div>

        {/* Apartment Image */}
        <div className="apartment-image flex-1 flex justify-center items-center">
          <img
            src="/public/images/Aparments_image.png"
            alt="Apartment"
            className="w-full sm:w-7/7 h-auto max-w-xl rounded-lg shadow-lg" 
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import 'boxicons/css/boxicons.min.css';

const BuildingAmenities = () => {
  const amenities = [
    {
      id: "01",
      icon: "bx bxs-car-garage",
      title: "Parking Space",
      description:
        "Ample, secure parking for residents and guests, ensuring convenience and easy access, while keeping your property organized and safe.",
    },
    {
      id: "02",
      icon: "bx bx-swim",
      title: "Swimming Pool",
      description:
        "A relaxing, well-maintained pool for recreation and fitness, offering a refreshing spot to unwind and enjoy with family.",
    },
    {
      id: "03",
      icon: "bx bxs-shield-minus",
      title: "Private Security",
      description:
        "24/7 security services ensure the safety of all residents, with monitored access points and professional staff to maintain peace.",
    },
    {
      id: "04",
      icon: "bx bx-plus-medical",
      title: "Medical Center",
      description:
        "On-site medical center providing quick access to healthcare, ensuring residents have immediate assistance in case of emergency or illness.",
    },
    {
      id: "05",
      icon: "bx bx-library",
      title: "Library Area",
      description:
        "A quiet, comfortable space for reading and study, offering a selection of books and a peaceful environment for relaxation.",
    },
    {
      id: "06",
      icon: "bx bxs-bed",
      title: "King Size Beds",
      description:
        "Spacious, comfortable king-size beds providing a luxurious sleep experience, ensuring residents enjoy restful nights in their homes.",
    },
    {
      id: "07",
      icon: "bx bxs-home-smile",
      title: "Smart Home",
      description:
        "A modern smart home system, offering control over lighting, security, and appliances for increased convenience, efficiency, and comfort.",
    },
    {
      id: "08",
      icon: "bx bx-walk",
      title: "Kid's Playland",
      description:
        "A fun and safe playland for children, equipped with engaging activities, encouraging play, and physical development in a secure environment.",
    },
  ];

  return (
    <div className="building_aminities py-12 px-6 md:px-16 bg-[#f1f3db]" id="Facilities">
      {/* Title Section */}
      <div className="container flex flex-col items-center justify-center mx-auto w-full overflow-hidden" id="About">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-gray-900 text-center">
          Facilities <span className="underline underline-offset-4 decoration-2 text-orange-500">Key Services</span>
        </h1>
        <p className="text-gray-600 max-w-lg text-center mb-10">
          Showcase of ongoing real estate projects with the passion to create value and excellence.
        </p>
      </div>

      {/* Amenities Grid */}
      <div className="building_aminities_main grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {amenities.map((amenity) => (
          <div
            key={amenity.id}
            className="card p-6 bg-white rounded-lg shadow-md text-center hover:shadow-lg transition-shadow hover:bg-orange-500 group min-h-[350px]" // Increased card height
          >
            {/* Icon */}
            <div className="card_icon text-orange-500 text-5xl mb-4 group-hover:text-white pt-2">
              <i className={amenity.icon}></i>
            </div>
            {/* Details */}
            <div className="card_detail">
              <span className="block text-gray-400 text-sm font-medium mb-2 group-hover:text-white">
                {amenity.id}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-white">
                {amenity.title}
              </h3>
              <p className="text-gray-600 text-sm group-hover:text-white ">
                {amenity.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuildingAmenities;

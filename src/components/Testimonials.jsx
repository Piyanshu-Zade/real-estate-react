import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      image: '/public/images/profile_img_3.png',
      text: "The real estate service provided was outstanding! They helped me find the perfect property that fits my needs and budget.",
      location: 'Nagpur, Maharashtra',
    },
    {
      name: 'Michael Johnson',
      image: '/public/images/profile_img_1.png',
      text: "An amazing experience! They truly understood my requirements and found me a property that exceeded my expectations. Highly recommended.",
      location: 'Nagpur, Maharashtra',
    },
    {
      name: 'Jane Smith',
      image: '/public/images/profile_img_2.png',
      text: "I couldn't be happier with the property I bought! The team was professional, responsive, and guided me through every step of the process.",
      location: 'Chandrapur, Maharashtra',
    },
  ];

  return (
    <div
      className="container flex flex-col bg-[#f1f3db] items-center justify-center mx-auto px-6 py-14 md:px-32 w-full overflow-hidden"
      id="Testimonials"
    >
      {/* Heading */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-gray-900 text-center">
        Testimonials <span className="underline underline-offset-4 decoration-2 text-orange-500">Client Opinions</span>
      </h1>

      {/* Subheading */}
      <p className="text-gray-600 max-w-lg text-center mb-10">
        Client opinions highlight service quality, guiding others to make informed decisions and trust our brand.
      </p>

      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-gray-900 mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-[#f2f4f5] p-6 rounded-lg shadow-lg max-w-xs mx-auto transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 text-lg mb-4">"{testimonial.text}"</p>
              <h4 className="text-xl font-bold text-gray-800">{testimonial.name}</h4>
              <p className="text-gray-500">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

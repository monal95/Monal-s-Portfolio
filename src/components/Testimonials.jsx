import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = ({ darkMode }) => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Senior Product Manager",
      company: "TechCorp Inc.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Yuji is an exceptional developer with a keen eye for detail. His work on our e-commerce platform exceeded expectations. He delivers clean, scalable code and is always willing to go the extra mile to ensure project success."
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      company: "StartupVision",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Working with Yuji has been a game-changer for our startup. His full-stack expertise and problem-solving skills helped us launch our MVP ahead of schedule. He's reliable, communicative, and produces high-quality work consistently."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Lead Designer",
      company: "Creative Solutions",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Yuji's ability to translate design concepts into functional, responsive web applications is remarkable. He pays attention to the smallest details and ensures pixel-perfect implementation while maintaining excellent performance."
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Engineering Manager",
      company: "InnovateLab",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Yuji is not just a skilled developer, but also a great team player. His mentorship has helped junior developers grow, and his technical expertise has solved some of our most challenging problems. Highly recommended!"
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Project Manager",
      company: "DigitalFlow",
      image: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Yuji consistently delivers projects on time and within budget. His communication is excellent, and he provides regular updates throughout the development process. Working with him has been a pleasure from start to finish."
    },
    {
      id: 6,
      name: "Robert Kumar",
      position: "Startup Founder",
      company: "NextGen Apps",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Yuji helped bring our vision to life with his exceptional development skills. He understood our requirements perfectly and delivered a robust, scalable solution. His expertise in modern technologies is impressive."
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            What Clients Say
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Here's what my clients and colleagues have to say about working with me.
            Their feedback reflects my commitment to delivering exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative`}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className={`w-12 h-12 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-6">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed text-sm`}>
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-purple-600"
                />
                <div>
                  <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {testimonial.position}
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-purple-400' : 'text-purple-600'} font-medium`}>
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className={`mt-16 p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-xl text-center`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className={`text-4xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'} mb-2`}>
                98%
              </div>
              <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium`}>
                Client Satisfaction
              </div>
            </div>
            <div>
              <div className={`text-4xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'} mb-2`}>
                25+
              </div>
              <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium`}>
                Happy Clients
              </div>
            </div>
            <div>
              <div className={`text-4xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'} mb-2`}>
                100%
              </div>
              <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium`}>
                On-Time Delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
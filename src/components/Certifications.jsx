import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = ({ darkMode }) => {
  const certifications = [
    {
      id: 1,
      title: " Oracle - APEX cloud Developer",
      issuer: "ORACLE University",
      date: "2025",
      image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      description: "Certified Oracle APEX Cloud Developer with hands-on experience in building secure, low-code web applications on Oracle Cloud.",
      credentialId: "GCP-PROF-2022-003",
      verifyLink: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=1658A61E5CB44303BE38847E2EE7978A8B842A4705D980625F3059232465F285"
    },
   
  ];

  return (
    <section id="certifications" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Certifications & Achievements
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Professional certifications that validate my expertise and commitment to 
            continuous learning in various technologies and platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
  <div
    key={cert.id}
    className={`${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    } rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2
      ${cert.title.includes('Oracle') ? 'lg:col-start-2' : ''}
    `}
  >
    <div className="relative overflow-hidden group">
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute top-4 right-4">
        <div className="bg-purple-600 text-white p-2 rounded-full">
          <Award className="w-5 h-5" />
        </div>
      </div>
    </div>

    <div className="p-6">
      <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'} line-clamp-2`}>
        {cert.title}
      </h3>

      <div className={`flex items-center mb-3 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
        <span className="font-semibold">{cert.issuer}</span>
      </div>

      <div className={`flex items-center mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        <Calendar className="w-4 h-4 mr-2" />
        <span className="text-sm">{cert.date}</span>
      </div>

      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm mb-4 leading-relaxed`}>
        {cert.description}
      </p>

      <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'} mb-4`}>
        <span className="font-medium">Credential ID:</span> {cert.credentialId}
      </div>

      <a
        href={cert.verifyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors duration-200"
      >
        <ExternalLink className="w-4 h-4 mr-1" />
        Verify Certificate
      </a>
    </div>
  </div>
))}

        </div>

        {/* Stats Section */}
        <div className={`mt-16 p-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} rounded-2xl`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-center">
            <div>
              <div className={`text-3xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'} mb-2`}>
                1
              </div>
              <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium`}>
                Certifications
              </div>
            </div>
            <div>
              <div className={`text-3xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'} mb-2`}>
                4+
              </div>
              <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium`}>
                Projects Completed
              </div>
            </div>
            <div>
              <div className={`text-3xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'} mb-2`}>
                10+
              </div>
              <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium`}>
                Technologies Mastered
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
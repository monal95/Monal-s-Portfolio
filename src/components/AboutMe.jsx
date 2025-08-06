import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import monal from './Assets/monal.jpg'

const AboutMe = ({ darkMode }) => {
  return (
    <section id="about" className={`min-h-screen relative overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Animated Purple Waves Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <svg viewBox="0 0 1200 800" className="absolute w-full h-full">
            <defs>
              <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#EC4899" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EC4899" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <path
              d="M0,400 C300,500 600,300 900,400 C1000,450 1100,350 1200,400 L1200,800 L0,800 Z"
              fill="url(#waveGradient1)"
              className="animate-pulse"
            />
            <path
              d="M0,500 C400,600 800,400 1200,500 L1200,800 L0,800 Z"
              fill="url(#waveGradient2)"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <img
                  src={monal}
                  alt="Profile"
                  className="w-40 h-40 lg:w-48 lg:h-48 object-cover rounded-full mx-auto lg:mx-0 border-4 border-white shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h1 className={`text-4xl lg:text-6xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                MONAL PRASHANTH C
              </h1>
              
              <p className={`text-xl lg:text-2xl mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'} font-light`}>
                Full Stack Aspiriant
              </p>
              
              <p className={`text-lg mb-8 max-w-lg mx-auto lg:mx-0 ${darkMode ? 'text-gray-400' : 'text-gray-700'} leading-relaxed`}>
               Aspiring ML Engineer and Full-Stack Developer passionate about AI and intelligent systems.
I explore deep learning, LLMs, and the MERN stack to build smart, scalable applications with real-world impact.
              </p>

              <div className="flex justify-center lg:justify-start space-x-6 mb-8">
                <a
                  href="https://github.com/monal95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110`}
                >
                  <Github className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
                </a>
                <a
                  href="https://www.linkedin.com/in/monal-prashanth-c-a453a4330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110`}
                >
                  <Linkedin className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
                </a>
              </div>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className={`flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Mail className="w-5 h-5 mr-2" />
                  <span>monalprashanth98@gmail.com</span>
                </div>
                <div className={`flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Hosur , Kirshanagiri</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 lg:pl-12">
            <div className={`${darkMode ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm p-8 rounded-2xl shadow-2xl`}>
              <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                About Me
              </h2>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4 leading-relaxed`}>
                I’m an aspiring Machine Learning and Full-Stack Developer with a deep passion for building intelligent and 
                scalable applications. I thrive on learning and continuously expanding my skills in cutting-edge technologies
                 such as Machine Learning (ML), Deep Learning (DL), Natural Language Processing (NLP), Large Language Models (LLMs),
                  and the MERN Stack (MongoDB, Express.js, React, Node.js).
              </p> 
               <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4 leading-relaxed`}>
                Driven by curiosity and a problem-solving mindset, I enjoy turning complex challenges into practical solutions through 
                code and data. I'm always eager to explore the latest advancements in AI and full-stack development to grow as a developer
                and contribute meaningfully to real-world projects
                </p>
               
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
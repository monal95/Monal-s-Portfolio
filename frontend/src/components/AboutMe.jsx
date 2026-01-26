import React, { useState } from 'react';
import { Github, Linkedin } from 'lucide-react';
import monal from './Assets/gitpic.jpg'

const AboutMe = ({ darkMode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <section id="about" className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-20`}>
      <div className="container mx-auto px-4">
        {/* Top Section - Profile Image, Name, Subtitle, and Social Links */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16 relative">
          {/* Left - Profile Image */}
          <div className="flex-shrink-0">
            <img
              src={monal}
              alt="Profile"
              className="w-56 h-56 object-cover rounded-full border-4 border-purple-500 shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right - Name, Subtitle, and Social Links */}
          <div className="flex-1 relative">
            {/* Social Links - Top Right */}
            <div className="flex justify-end space-x-4 mb-6 lg:absolute lg:top-0 lg:right-0">
              <a
                href="https://github.com/monal95"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 hover:from-purple-500/50 hover:to-pink-500/50 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 border border-purple-400/50 hover:border-purple-300"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/monal-prashanth-c-a453a4330"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 hover:from-blue-500/50 hover:to-purple-500/50 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 border border-blue-400/50 hover:border-blue-300"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
            </div>

            {/* Name and Subtitle */}
            <div className="text-left lg:text-left mt-8 lg:mt-0">
              <h1 className={`text-4xl lg:text-5xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                MONAL PRASHANTH C
              </h1>
              <p className={`text-xl lg:text-2xl font-light ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                Full Stack Aspiriant
              </p>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`relative p-12 rounded-3xl transition-all duration-300 ${
            isHovering 
              ? 'shadow-2xl' 
              : 'shadow-lg'
          }`}
          style={{
            background: isHovering
              ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                  rgba(139, 92, 246, 0.3) 0%, 
                  rgba(236, 72, 153, 0.2) 35%, 
                  rgba(59, 130, 246, 0.15) 70%, 
                  ${darkMode ? 'rgba(17, 24, 39, 0.8)' : 'rgba(243, 244, 246, 0.8)'} 100%)`
              : `linear-gradient(135deg, 
                  ${darkMode ? 'rgba(55, 65, 81, 0.5)' : 'rgba(229, 231, 235, 0.5)'} 0%, 
                  ${darkMode ? 'rgba(31, 41, 55, 0.5)' : 'rgba(243, 244, 246, 0.5)'} 100%)`,
            border: isHovering
              ? '2px solid rgba(139, 92, 246, 0.5)'
              : `2px solid ${darkMode ? 'rgba(75, 85, 99, 0.3)' : 'rgba(209, 213, 219, 0.3)'}`,
          }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-10 text-left bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className={`${darkMode ? 'text-gray-200' : 'text-gray-800'} mb-8 leading-relaxed font-medium text-xl`}>
            I’m a pre-final year Machine Learning student with a strong foundation in full-stack development and a growing focus on 
            AI-driven full-stack applications.
            I enjoy building intelligent, scalable products that blend solid engineering with real-world impact.
          </p> 
          <p className={`${darkMode ? 'text-gray-200' : 'text-gray-800'} mb-8 leading-relaxed font-medium text-xl`}>
            I actively work with Machine Learning, Deep Learning, NLP, LLMs, and the MERN stack, and I’m currently exploring Agentic AI workflows—from 
            tool-calling and orchestration to building smarter, 
            autonomous systems powered by LLMs.
          </p>
          <p className={`${darkMode ? 'text-gray-200' : 'text-gray-800'} mb-8 leading-relaxed font-medium text-xl`}>
           Curious by default and driven by problem-solving, 
           I like turning complex ideas into clean, usable solutions through code and data.
           From training models to deploying full-stack applications, 
           I focus on performance, scalability, and user-first design.
          </p>
          <p className={`${darkMode ? 'text-gray-200' : 'text-gray-800'} leading-relaxed font-medium text-xl`}>
            I believe the future lies in combining AI intelligence with intuitive interfaces, 
            and every project I build is a step toward mastering that intersection—learning fast, 
            shipping better, and continuously leveling up
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import digitsImage from './Assets/digits1.png';
import workotImage from './Assets/workout.jpg';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "Neuro Digits",
      description: "Developed a Handwritten Digit Classification model using Convolutional Neural Networks (CNN) to accurately recognize digits from images. Deployed the model with an interactive Streamlit web interface for real-time predictions.",
      image:  digitsImage,
      technologies: ["Python", "CNN", "Streamlit"],
      github: "https://github.com/monal95/Hand-Written-Digit-Classfication",
      live: "https://monal95-hand-written-digit-classfication-streamlit-app-vsbzaf.streamlit.app/"
    },
    {
      id: 2,
      title: "Fit Forge",
      description: " Built a full-stack Workout Tracker application using the MERN stack that enables users to log, update, and monitor daily exercises.",
      image: workotImage,
      technologies: ["React", "Express", "Node.js", "MongoDB"],
      github: "https://github.com/monal95",
    }
  ]

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured Projects
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Here are some of my recent projects that showcase my skills in full-stack development, machine learning,
             and building intelligent, user-friendly applications and problem-solving abilities..
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/20 transition-all duration-300"></div>
              </div>

              <div className="p-8">
                <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-sm rounded-full ${darkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-800'} font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'} transition-colors duration-200 font-medium`}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200 font-medium"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
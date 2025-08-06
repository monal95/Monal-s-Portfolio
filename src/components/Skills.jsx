import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const Skills = ({ darkMode }) => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      skills: [
        { name: "React", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 70 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 70 }
      ]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 75 },
        { name: "Python", level: 80 },
        { name: "Java", level: 90 },
        { name: "REST APIs", level: 75 }
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database & Cloud",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "Firebase", level: 70 }
      ]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design & Tools",
      skills: [      
        { name: "Git/GitHub", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Skills & Expertise
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Here's an overview of my technical skills and proficiency levels across different 
            technologies and tools I use to build amazing digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-600 rounded-xl mr-4">
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} font-medium`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
                      <div
                        className="h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Server, Palette, Code2 } from 'lucide-react';

const Skills = ({ darkMode, triggerAnimation }) => {
  const [animatedCategories, setAnimatedCategories] = useState(new Set());
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        { name: "React", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
      ]
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 80 },
        { name: "REST APIs", level: 75 }
      ]
    },
    {
      icon: Database,
      title: "Database & Cloud",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 75 },
      ]
    },
    {
      icon: Palette,
      title: "Design & Tools",
      skills: [      
    { name: "Git/GitHub", level: 80 },
    { name: "Power BI", level: 70 }
      ]
    },
    {
      icon: Code2,
      title: "Programming Language",
      skills: [      
    { name: "Java", level:85 },
    { name: "C", level: 80 },
    { name: "Python", level: 75 }
      ]
    }
  ];

  useEffect(() => {
    if (triggerAnimation) {
      setAnimatedCategories(new Set());
      skillCategories.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedCategories((prev) => new Set([...prev, index]));
        }, index * 200);
      });
    }
  }, [triggerAnimation]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setAnimatedCategories(new Set());
          skillCategories.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedCategories((prev) => new Set([...prev, index]));
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section id="skills" ref={sectionRef} className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <style>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fillBar {
          from {
            width: 0;
          }
          to {
            width: var(--skill-level);
          }
        }
        
        .animate-slide-in {
          animation: slideInFromLeft 0.6s ease-out forwards;
        }

        .animate-fill-bar {
          width: 0;
          animation: fillBar 3.0s ease-out forwards;
        }
      `}</style>
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
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                  animatedCategories.has(index) ? 'animate-slide-in' : 'opacity-0 translate-x-[-100%]'
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-purple-600 rounded-xl mr-4">
                    <Icon className="w-8 h-8 text-white" />
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
                      <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2 overflow-hidden`}>
                        <div
                          className={`h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full ${
                            animatedCategories.has(index) ? 'animate-fill-bar' : ''
                          }`}
                          style={{ 
                            '--skill-level': `${skill.level}%`,
                            animationDelay: `${index * 200 + skillIndex * 100}ms`,
                            width: animatedCategories.has(index) ? undefined : '0%'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
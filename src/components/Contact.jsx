import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          address: '',
          message: ''
        });
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Let's Work Together
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Ready to bring your ideas to life? I'm always excited to work on new projects 
            and collaborate with amazing people. Get in touch and let's create something great!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-8 rounded-2xl shadow-xl`}>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="p-3 bg-purple-600 rounded-xl mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Email
                    </h4>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      monalprashanth98@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-purple-600 rounded-xl mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Phone
                    </h4>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      +91 6374869043
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-purple-600 rounded-xl mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Location
                    </h4>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Hosur , Kirshnagiri
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-8 rounded-2xl shadow-xl`}>
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Let's Discuss Your Project
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                As a passionate learner and aspiring developer, I’m eager to contribute to real-world projects. 
                Whether you need a new website, a web application, or improvements to an existing one, I’d love to collaborate. 
                I offer free consultations to understand your needs and deliver solutions that align with your goals 
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-8 rounded-2xl shadow-xl`}>
            <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Send Me a Message
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Message Sent Successfully!
                </h4>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200`}
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Address/Location
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200`}
                    placeholder="Your city, country"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-vertical`}
                    placeholder="Type your Ideas....."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
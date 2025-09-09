/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  // const socialLinks = [
  //   { name: 'GitHub', href: 'https://github.com/debola88', icon: Github },
  //   { name: 'LinkedIn', href: 'https://linkedin.com/in/devdebo', icon: Linkedin },
  //   { name: 'Twitter', href: 'https://twitter.com/devdebo', icon: Twitter },
  //   { name: 'Email', href: 'adebolabadejo11@gmail.com', icon: Mail },
  // ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'Consulting',
  ];

  return (
    <footer className="relative bg-black/20 backdrop-blur-md border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300 inline-block"
            >
              DevDebo
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Crafting beautiful digital experiences with modern web technologies. 
              Passionate about clean code and user-centric design.
            </p>
            {/* <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div> */}
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Navigation</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-300 text-sm flex items-center">
                  <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Get In Touch</h3>
            <div className="space-y-3">
              <Link
                href="mailto:adebolabadejo11@gmail.com"
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-sm flex items-center group"
              >
                <Mail className="w-4 h-4 mr-2" />
                adebolabadejo11@gmail.com
                <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <div className="text-gray-300 text-sm">
                <p>Available for freelance work</p>
                <p className="text-green-400 text-xs">● Currently accepting projects</p>
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-medium hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
              >
                Let&apos;s Work Together
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            &copy; {currentYear} DevDebo. All rights reserved.
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute top-4 right-4 bg-white/10 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
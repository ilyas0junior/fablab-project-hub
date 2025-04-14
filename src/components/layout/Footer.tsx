
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-fablab-dark text-white">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <div className="h-6 w-6 rounded-full bg-fablab-primary flex items-center justify-center mr-2">
                <span className="text-white font-bold text-xs">FL</span>
              </div>
              FABLAB
            </h3>
            <p className="mb-4 text-gray-300">
              A creative space for students to explore, design, and build innovative projects using state-of-the-art fabrication equipment.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-fablab-primary transition">Home</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-fablab-primary transition">Projects</Link></li>
              <li><Link to="/definitions" className="text-gray-300 hover:text-fablab-primary transition">Definitions & Origins</Link></li>
              <li><Link to="/materials" className="text-gray-300 hover:text-fablab-primary transition">Materials</Link></li>
              <li><Link to="/reservation" className="text-gray-300 hover:text-fablab-primary transition">Make a Reservation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-fablab-primary" />
                <span className="text-gray-300">University Campus, Building B, Room 104</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-fablab-primary" />
                <a href="mailto:contact@fablab.edu" className="text-gray-300 hover:text-fablab-primary transition">contact@fablab.edu</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-fablab-primary" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-fablab-primary transition">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} FABLAB Club. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-400">Designed with passion by FABLAB members</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

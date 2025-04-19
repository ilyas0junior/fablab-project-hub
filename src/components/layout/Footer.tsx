
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Printer, Link as LinkIcon } from "lucide-react";

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
              Universiapolis FABLAB
            </h3>
            <p className="mb-4 text-gray-300">
              The Lab has a great and peaceful environment. Our staff are helpful and full of motivation to work on multiple projects.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Lab Capabilities</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <Printer className="h-5 w-5 text-fablab-primary mr-2" />
                3D Printing
              </li>
              <li className="flex items-center text-gray-300">
                <LinkIcon className="h-5 w-5 text-fablab-primary mr-2" />
                CNC-Milling
              </li>
              <li className="flex items-center text-gray-300">
                <LinkIcon className="h-5 w-5 text-fablab-primary mr-2" />
                Circuit Production
              </li>
              <li className="flex items-center text-gray-300">
                <LinkIcon className="h-5 w-5 text-fablab-primary mr-2" />
                Laser Precision Milling
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-fablab-primary" />
                <span className="text-gray-300">Bab Al Madina, Qr Tilila, B.P. 8143, Agadir, Agadir-ida-outanane, 80000, Morocco</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-fablab-primary" />
                <a href="mailto:elmehdi.kibbou@e-polytechnique.ma" className="text-gray-300 hover:text-fablab-primary transition">
                  elmehdi.kibbou@e-polytechnique.ma
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-fablab-primary" />
                <a href="tel:00212643140421" className="text-gray-300 hover:text-fablab-primary transition">
                  +212 643 140 421
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <LinkIcon className="h-5 w-5 text-fablab-primary" />
                <a href="https://e-polytechnique.ma/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-fablab-primary transition">
                  e-polytechnique.ma
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Universiapolis FABLAB. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-400">A Hub for Innovation and Creativity</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

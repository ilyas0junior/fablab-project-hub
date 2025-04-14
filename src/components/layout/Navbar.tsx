
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Menu,
  X,
  BookOpen,
  Wrench,
  Calendar,
  Users,
  Home
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Projects", href: "/projects", icon: LayoutDashboard },
    { name: "Definitions", href: "/definitions", icon: BookOpen },
    { name: "Materials", href: "/materials", icon: Wrench },
    { name: "Reservation", href: "/reservation", icon: Calendar },
    { name: "Admin", href: "/admin/login", icon: Users },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-fablab-primary flex items-center justify-center">
                  <span className="text-white font-bold">FL</span>
                </div>
                <span className="font-bold text-xl text-fablab-dark">FABLAB</span>
              </Link>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 
                  ${isActive(item.href) 
                    ? 'bg-fablab-primary text-white' 
                    : 'text-gray-600 hover:bg-fablab-light hover:text-fablab-primary'}`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
          
          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2
                  ${isActive(item.href) 
                    ? 'bg-fablab-primary text-white' 
                    : 'text-gray-600 hover:bg-fablab-light hover:text-fablab-primary'}`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

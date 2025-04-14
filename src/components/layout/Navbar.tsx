
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, User, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, admin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Materials", path: "/materials" },
    { name: "Definitions", path: "/definitions" },
    { name: "Reservation", path: "/reservation" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-fablab-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold">FAB<span className="text-fablab-primary">LAB</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors hover:text-fablab-primary ${
                  isActive(link.path) ? "text-fablab-primary font-medium" : "text-gray-200"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="text-sm">
                  {admin ? (
                    <Link to="/admin/dashboard" className="flex items-center text-fablab-primary hover:text-fablab-secondary">
                      <User className="h-4 w-4 mr-1" />
                      Admin Dashboard
                    </Link>
                  ) : (
                    <span>Welcome, {user?.firstName}</span>
                  )}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-gray-600 text-gray-200 hover:text-white hover:bg-fablab-dark/30"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Button asChild variant="ghost" size="sm" className="text-gray-200 hover:text-white hover:bg-fablab-dark/30">
                  <Link to="/login">Log in</Link>
                </Button>
                <Button asChild size="sm" className="bg-fablab-primary hover:bg-fablab-secondary">
                  <Link to="/signup">Sign up</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-fablab-dark border-fablab-dark/20 text-white">
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-base py-2 transition-colors hover:text-fablab-primary ${
                      isActive(link.path) ? "text-fablab-primary font-medium" : "text-gray-200"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-700 mt-2">
                  {isAuthenticated ? (
                    <>
                      <div className="text-sm mb-4">
                        {admin ? (
                          <Link 
                            to="/admin/dashboard" 
                            className="flex items-center text-fablab-primary hover:text-fablab-secondary"
                            onClick={() => setIsOpen(false)}
                          >
                            <User className="h-4 w-4 mr-2" />
                            Admin Dashboard
                          </Link>
                        ) : (
                          <span>Welcome, {user?.firstName}</span>
                        )}
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full border-gray-600 text-gray-200 hover:text-white hover:bg-fablab-dark/30"
                        onClick={() => {
                          handleLogout();
                          setIsOpen(false);
                        }}
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button 
                        asChild 
                        variant="ghost" 
                        className="w-full mb-2 text-gray-200 hover:text-white hover:bg-fablab-dark/30"
                        onClick={() => setIsOpen(false)}
                      >
                        <Link to="/login">Log in</Link>
                      </Button>
                      <Button 
                        asChild 
                        className="w-full bg-fablab-primary hover:bg-fablab-secondary"
                        onClick={() => setIsOpen(false)}
                      >
                        <Link to="/signup">Sign up</Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

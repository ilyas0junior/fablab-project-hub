
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, BookOpen, Calendar } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { projects } from "@/data/projectsData";

const Index = () => {
  const featuredProjects = projects.filter(project => project.featured);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-fablab-dark text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-fablab-primary/20 to-fablab-dark z-0"></div>
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Welcome to <span className="text-fablab-primary">FABLAB</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                A creative space where innovation comes to life. Design, build, and bring your ideas to reality with our state-of-the-art fabrication equipment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-fablab-primary hover:bg-fablab-secondary">
                  <Link to="/projects">
                    Explore Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10">
                  <Link to="/reservation">
                    Make a Reservation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-fablab-dark">Featured Projects</h2>
              <Link to="/projects" className="text-fablab-primary hover:text-fablab-secondary flex items-center">
                View All
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-fablab-dark mb-12">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="h-14 w-14 bg-fablab-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-7 w-7 text-fablab-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Equipment Access</h3>
                <p className="text-gray-600">
                  Get hands-on with our collection of 3D printers, laser cutters, CNC machines, and electronics workstations.
                </p>
                <Button asChild variant="link" className="mt-4 text-fablab-primary hover:text-fablab-secondary">
                  <Link to="/materials">
                    View Equipment
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="h-14 w-14 bg-fablab-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-7 w-7 text-fablab-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Knowledge Base</h3>
                <p className="text-gray-600">
                  Learn about the history of FabLabs, key terminology, and best practices for your fabrication projects.
                </p>
                <Button asChild variant="link" className="mt-4 text-fablab-primary hover:text-fablab-secondary">
                  <Link to="/definitions">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="h-14 w-14 bg-fablab-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-7 w-7 text-fablab-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Project Reservations</h3>
                <p className="text-gray-600">
                  Reserve time on our equipment for your projects. Submit your request and get approval from our admins.
                </p>
                <Button asChild variant="link" className="mt-4 text-fablab-primary hover:text-fablab-secondary">
                  <Link to="/reservation">
                    Reserve Now
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 bg-fablab-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to bring your ideas to life?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join our community of makers, creators, and innovators. Start your fabrication journey today!
            </p>
            <Button asChild size="lg" className="bg-white text-fablab-primary hover:bg-gray-100">
              <Link to="/reservation">
                Make a Reservation
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

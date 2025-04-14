
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects as allProjects } from "@/data/projectsData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Get unique categories
  const categories = Array.from(new Set(allProjects.map(project => project.category)));
  
  // Filter projects based on search term and selected category
  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.creator.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory ? project.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-fablab-dark text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Project Showcase</h1>
            <p className="text-lg text-gray-300 max-w-3xl">
              Explore innovative projects created in our FABLAB. Get inspired and learn from the work of fellow students and makers.
            </p>
          </div>
        </section>
        
        {/* Filters */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  onClick={() => setSelectedCategory(null)}
                  className={selectedCategory === null ? "bg-fablab-primary hover:bg-fablab-secondary" : ""}
                >
                  All
                </Button>
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-fablab-primary hover:bg-fablab-secondary" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium text-gray-800">No projects found</h3>
                <p className="text-gray-600 mt-2">Try changing your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;

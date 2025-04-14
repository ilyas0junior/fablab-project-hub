
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MaterialCard from "@/components/MaterialCard";
import { materials as allMaterials } from "@/data/materialsData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Materials = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);
  
  // Get unique types
  const materialTypes = Array.from(new Set(allMaterials.map(material => material.type)));
  
  // Filter materials based on selected type and availability
  const filteredMaterials = allMaterials.filter(material => {
    const matchesType = selectedType ? material.type === selectedType : true;
    const matchesAvailability = showOnlyAvailable ? material.status === "available" : true;
    
    return matchesType && matchesAvailability;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-fablab-dark text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Equipment</h1>
            <p className="text-lg text-gray-300 max-w-3xl">
              Explore our collection of cutting-edge fabrication equipment available for your projects. Check status and specifications before making a reservation.
            </p>
          </div>
        </section>
        
        {/* Status Legend */}
        <section className="py-4 bg-gray-50 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sm font-medium">Status:</span>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="text-sm">Available</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                <span className="text-sm">In Use</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="text-sm">Maintenance</span>
              </div>
              
              <div className="ml-auto">
                <Button 
                  variant="outline" 
                  size="sm"
                  className={`text-xs ${showOnlyAvailable ? 'bg-green-50 border-green-200 text-green-700' : ''}`}
                  onClick={() => setShowOnlyAvailable(!showOnlyAvailable)}
                >
                  {showOnlyAvailable ? 'Showing Available Only' : 'Show All Equipment'}
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Filters */}
        <section className="py-6 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedType === null ? "default" : "outline"}
                onClick={() => setSelectedType(null)}
                className={selectedType === null ? "bg-fablab-primary hover:bg-fablab-secondary" : ""}
              >
                All Equipment
              </Button>
              {materialTypes.map(type => (
                <Button
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  onClick={() => setSelectedType(type)}
                  className={selectedType === type ? "bg-fablab-primary hover:bg-fablab-secondary" : ""}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Materials Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredMaterials.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMaterials.map(material => (
                  <MaterialCard key={material.id} material={material} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium text-gray-800">No equipment found</h3>
                <p className="text-gray-600 mt-2">Try changing your filters</p>
              </div>
            )}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-fablab-dark">Ready to use our equipment?</h2>
            <p className="text-gray-600 mb-6">
              Make a reservation to use our facilities for your next project.
            </p>
            <Button asChild className="bg-fablab-primary hover:bg-fablab-secondary">
              <a href="/reservation">Make a Reservation</a>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Materials;

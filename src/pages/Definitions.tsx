
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Definitions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-fablab-dark text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">FABLAB: Definitions & Origins</h1>
            <p className="text-lg text-gray-300 max-w-3xl">
              Understanding the concepts, terminology, and history behind Fabrication Laboratories.
            </p>
          </div>
        </section>
        
        {/* Origins Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-fablab-dark">The FABLAB Origin Story</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <p className="mb-4 text-gray-700">
                  The FabLab (Fabrication Laboratory) concept was developed by Professor Neil Gershenfeld at MIT's Center for Bits and Atoms. The first FabLab was established at MIT in the early 2000s, with the goal of democratizing access to digital fabrication tools and technologies.
                </p>
                
                <p className="mb-4 text-gray-700">
                  FabLabs are designed to be spaces where people can turn their ideas into reality using digital fabrication tools like 3D printers, laser cutters, CNC machines, and electronic workbenches. The FabLab network has since expanded globally, with hundreds of labs operating in over 100 countries.
                </p>
                
                <p className="mb-4 text-gray-700">
                  FabLabs are built on four core principles:
                </p>
                
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                  <li><span className="font-semibold">Open Access:</span> FabLabs should be accessible to the public, at least part of the time.</li>
                  <li><span className="font-semibold">Common Tools:</span> FabLabs should share a common set of tools and processes.</li>
                  <li><span className="font-semibold">Community:</span> FabLabs are part of a global knowledge-sharing network.</li>
                  <li><span className="font-semibold">Education:</span> FabLabs should provide learning opportunities and foster innovation.</li>
                </ul>
                
                <p className="text-gray-700">
                  Our university FABLAB follows these principles while adapting to the specific needs of our academic community, providing students with the resources they need to explore, learn, and create.
                </p>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-fablab-dark">FABLAB Timeline</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-fablab-primary font-bold">2001</p>
                    <p className="font-medium">First FabLab concept at MIT</p>
                    <p className="text-sm text-gray-600">Initial development of the Fabrication Laboratory concept by Prof. Neil Gershenfeld</p>
                  </div>
                  
                  <div>
                    <p className="text-fablab-primary font-bold">2002-2005</p>
                    <p className="font-medium">First FabLabs established</p>
                    <p className="text-sm text-gray-600">Early FabLabs open in India, Costa Rica, Norway, Boston, and Ghana</p>
                  </div>
                  
                  <div>
                    <p className="text-fablab-primary font-bold">2009</p>
                    <p className="font-medium">FabLab Network formalized</p>
                    <p className="text-sm text-gray-600">Global FabLab network and standards established</p>
                  </div>
                  
                  <div>
                    <p className="text-fablab-primary font-bold">2014</p>
                    <p className="font-medium">FabFoundation established</p>
                    <p className="text-sm text-gray-600">Non-profit organization created to support the growing FabLab network</p>
                  </div>
                  
                  <div>
                    <p className="text-fablab-primary font-bold">Today</p>
                    <p className="font-medium">Global Impact</p>
                    <p className="text-sm text-gray-600">Over 2,000 FabLabs in more than 100 countries worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Definitions Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-fablab-dark">Key Terminology</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="3d-printing">
                <AccordionTrigger className="text-lg font-medium hover:text-fablab-primary">3D Printing</AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p>A additive manufacturing process that creates three-dimensional objects by depositing materials layer by layer based on a digital model. Common technologies include:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li><span className="font-medium">FDM (Fused Deposition Modeling):</span> Extrudes thermoplastic filament through a heated nozzle</li>
                    <li><span className="font-medium">SLA (Stereolithography):</span> Uses UV light to cure liquid resin layer by layer</li>
                    <li><span className="font-medium">SLS (Selective Laser Sintering):</span> Uses lasers to sinter powdered material</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="cnc">
                <AccordionTrigger className="text-lg font-medium hover:text-fablab-primary">CNC Machining</AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p>Computer Numerical Control (CNC) is a subtractive manufacturing process that uses computerized controls to operate machining tools. CNC machines can cut, drill, and shape materials like wood, metal, and plastic with high precision. Common CNC machines include mills, routers, and lathes.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="laser-cutting">
                <AccordionTrigger className="text-lg font-medium hover:text-fablab-primary">Laser Cutting</AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p>A fabrication process that uses a focused laser beam to cut or engrave materials. Laser cutters can work with a variety of materials including wood, acrylic, paper, and fabric, creating precise cuts based on vector designs.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="cad">
                <AccordionTrigger className="text-lg font-medium hover:text-fablab-primary">CAD (Computer-Aided Design)</AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p>Software used to create, modify, analyze, and optimize designs. CAD programs allow users to create 2D drawings or 3D models that can be exported to various fabrication machines. Common CAD software includes Fusion 360, SolidWorks, AutoCAD, and free alternatives like TinkerCAD and FreeCAD.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="cam">
                <AccordionTrigger className="text-lg font-medium hover:text-fablab-primary">CAM (Computer-Aided Manufacturing)</AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p>Software that converts CAD designs into instructions (G-code) that control CNC machines. CAM software determines toolpaths, cutting speeds, and other parameters necessary for fabrication.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="stl">
                <AccordionTrigger className="text-lg font-medium hover:text-fablab-primary">STL File</AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p>STL (STereoLithography) is a file format widely used in 3D printing. It represents 3D surfaces as a collection of triangular facets, providing the necessary geometry for slicing software to generate printer instructions.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="g-code">
                <AccordionTrigger className="text-lg font-medium hover:text-fablab-primary">G-code</AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p>A programming language used to control automated machine tools like 3D printers and CNC machines. G-code tells the machine what movements to make, at what speed, and following what path.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="slicer">
                <AccordionTrigger className="text-lg font-medium hover:text-fablab-primary">Slicer Software</AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p>Software that converts 3D models (usually STL files) into a series of thin layers (slices) and generates the G-code instructions for a 3D printer to create the object. Popular slicers include Cura, PrusaSlicer, and Simplify3D.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="rapid-prototyping">
                <AccordionTrigger className="text-lg font-medium hover:text-fablab-primary">Rapid Prototyping</AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p>The process of quickly creating a physical model or prototype of a part or product using digital fabrication techniques like 3D printing. Rapid prototyping allows for quick iteration and testing of designs before final production.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="pcb">
                <AccordionTrigger className="text-lg font-medium hover:text-fablab-primary">PCB (Printed Circuit Board)</AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  <p>A board that mechanically supports and electrically connects electronic components using conductive tracks. In FabLabs, PCBs can be designed digitally and then fabricated using CNC milling machines or chemical etching processes.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        
        {/* Resources Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-fablab-dark">Additional Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="https://fabfoundation.org/" target="_blank" rel="noopener noreferrer" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-2 text-fablab-dark">Fab Foundation</h3>
                <p className="text-gray-600">The official organization supporting the global FabLab network.</p>
              </a>
              
              <a href="http://fab.cba.mit.edu/" target="_blank" rel="noopener noreferrer" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-2 text-fablab-dark">MIT Center for Bits and Atoms</h3>
                <p className="text-gray-600">The birthplace of the FabLab concept and ongoing research center.</p>
              </a>
              
              <a href="https://fabacademy.org/" target="_blank" rel="noopener noreferrer" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-2 text-fablab-dark">Fab Academy</h3>
                <p className="text-gray-600">A distributed educational program teaching digital fabrication techniques.</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Definitions;

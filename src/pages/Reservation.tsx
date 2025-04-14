
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ReservationForm from "@/components/ReservationForm";
import { Card } from "@/components/ui/card";
import { ClipboardList, Clock, CheckCircle } from "lucide-react";

const Reservation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-fablab-dark text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Make a Reservation</h1>
            <p className="text-lg text-gray-300 max-w-3xl">
              Reserve time on our equipment for your projects. Fill out the form below to submit your request.
            </p>
          </div>
        </section>
        
        {/* Reservation Process */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-fablab-dark">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="h-12 w-12 bg-fablab-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClipboardList className="h-6 w-6 text-fablab-primary" />
                </div>
                <h3 className="font-semibold mb-2">1. Submit Request</h3>
                <p className="text-sm text-gray-600">
                  Fill out the reservation form with your project details and preferred date.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="h-12 w-12 bg-fablab-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-fablab-primary" />
                </div>
                <h3 className="font-semibold mb-2">2. Await Approval</h3>
                <p className="text-sm text-gray-600">
                  An admin will review your request and contact you via email.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="h-12 w-12 bg-fablab-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-fablab-primary" />
                </div>
                <h3 className="font-semibold mb-2">3. Confirmed!</h3>
                <p className="text-sm text-gray-600">
                  Once approved, your reservation is confirmed and you're good to go.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Reservation Form */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto p-6 lg:p-8">
              <h2 className="text-2xl font-bold mb-6 text-fablab-dark">Reservation Request</h2>
              <ReservationForm />
            </Card>
          </div>
        </section>
        
        {/* Policy Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-xl font-bold mb-4 text-fablab-dark">Reservation Policies</h2>
            
            <div className="space-y-4 text-sm text-gray-700">
              <p>
                <span className="font-medium">Eligibility:</span> Reservations are open to all students with a valid student ID.
              </p>
              <p>
                <span className="font-medium">Time Limits:</span> Equipment can be reserved for up to 4 hours per session.
              </p>
              <p>
                <span className="font-medium">Cancellations:</span> Please notify us at least 24 hours in advance if you need to cancel.
              </p>
              <p>
                <span className="font-medium">Materials:</span> Students are responsible for providing their own materials unless otherwise specified.
              </p>
              <p>
                <span className="font-medium">Training:</span> First-time users may be required to complete a brief training session before using certain equipment.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Reservation;

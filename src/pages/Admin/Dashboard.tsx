
import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Clock, Wrench, LogOut, Bell, Users, Home } from "lucide-react";
import AdminMaterialToggle from "@/components/AdminMaterialToggle";
import { materials } from "@/data/materialsData";

// Mock reservation data
const reservationRequests = [
  {
    id: 1,
    firstName: "Emily",
    lastName: "Johnson",
    studentId: "S12345",
    email: "emily.j@university.edu",
    materialId: "1",
    reservationDate: "2023-12-20T10:00:00",
    projectName: "Smart Home Controller",
    description: "Creating a prototype for a smart home controller using Arduino and 3D printed case.",
    status: "pending",
    submittedAt: "2023-12-15T14:30:00"
  },
  {
    id: 2,
    firstName: "Michael",
    lastName: "Chen",
    studentId: "S67890",
    email: "m.chen@university.edu",
    materialId: "4",
    reservationDate: "2023-12-22T13:00:00",
    projectName: "Custom Desk Organizer",
    description: "Designing and fabricating a modular desk organizer using the CNC machine.",
    status: "pending",
    submittedAt: "2023-12-16T09:15:00"
  },
  {
    id: 3,
    firstName: "Sarah",
    lastName: "Miller",
    studentId: "S24680",
    email: "s.miller@university.edu",
    materialId: "3",
    reservationDate: "2023-12-21T15:30:00",
    projectName: "Acrylic Signage",
    description: "Creating custom acrylic signs for the student union using laser cutting.",
    status: "pending",
    submittedAt: "2023-12-16T11:45:00"
  }
];

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Check if admin is logged in
  useEffect(() => {
    const adminSession = localStorage.getItem("fablabAdmin");
    if (!adminSession || !JSON.parse(adminSession).isLoggedIn) {
      navigate("/admin/login");
    }
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem("fablabAdmin");
    navigate("/admin/login");
  };
  
  const getMaterialName = (id: string) => {
    const material = materials.find(m => m.id === parseInt(id));
    return material ? material.name : "Unknown Equipment";
  };
  
  const handleApprove = (id: number) => {
    // In a real app, this would update the reservation status in the backend
    console.log("Approved reservation:", id);
    alert(`Reservation #${id} approved. An email notification would be sent to the student.`);
  };
  
  const handleReject = (id: number) => {
    // In a real app, this would update the reservation status in the backend
    console.log("Rejected reservation:", id);
    alert(`Reservation #${id} rejected. An email notification would be sent to the student.`);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-fablab-dark text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">Admin Dashboard</h1>
                <p className="text-gray-300">Manage equipment status and reservation requests</p>
              </div>
              
              <div className="mt-4 md:mt-0 flex gap-2">
                <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
                  <Link to="/">
                    <Home className="mr-2 h-4 w-4" />
                    View Site
                  </Link>
                </Button>
                
                <Button variant="destructive" onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Dashboard Tabs */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="reservations">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="reservations" className="text-base">
                  <Bell className="mr-2 h-4 w-4" />
                  Reservation Requests
                </TabsTrigger>
                <TabsTrigger value="equipment" className="text-base">
                  <Wrench className="mr-2 h-4 w-4" />
                  Equipment Management
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="reservations">
                <Card>
                  <CardHeader>
                    <CardTitle>Pending Reservation Requests</CardTitle>
                    <CardDescription>
                      Review and approve or reject reservation requests from students
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {reservationRequests.length > 0 ? (
                      <div className="space-y-6">
                        {reservationRequests.map((request) => (
                          <Card key={request.id} className="overflow-hidden">
                            <CardHeader className="bg-gray-50 p-4">
                              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                <div>
                                  <CardTitle className="text-lg">
                                    {request.projectName}
                                  </CardTitle>
                                  <CardDescription>
                                    by {request.firstName} {request.lastName} ({request.email})
                                  </CardDescription>
                                </div>
                                
                                <div className="flex items-center gap-2">
                                  <Button 
                                    variant="outline" 
                                    size="sm" 
                                    className="border-green-500 text-green-600 hover:bg-green-50"
                                    onClick={() => handleApprove(request.id)}
                                  >
                                    Approve
                                  </Button>
                                  
                                  <Button 
                                    variant="outline" 
                                    size="sm" 
                                    className="border-red-500 text-red-600 hover:bg-red-50"
                                    onClick={() => handleReject(request.id)}
                                  >
                                    Reject
                                  </Button>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="p-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                  <h4 className="text-sm font-medium text-gray-500">Equipment</h4>
                                  <p className="text-sm">{getMaterialName(request.materialId)}</p>
                                </div>
                                
                                <div>
                                  <h4 className="text-sm font-medium text-gray-500">Reservation Date</h4>
                                  <p className="text-sm flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    {new Date(request.reservationDate).toLocaleDateString()} at {new Date(request.reservationDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                  </p>
                                </div>
                                
                                <div>
                                  <h4 className="text-sm font-medium text-gray-500">Student ID</h4>
                                  <p className="text-sm flex items-center gap-1">
                                    <Users className="h-3 w-3" />
                                    {request.studentId}
                                  </p>
                                </div>
                                
                                <div>
                                  <h4 className="text-sm font-medium text-gray-500">Submitted</h4>
                                  <p className="text-sm">
                                    {new Date(request.submittedAt).toLocaleDateString()} at {new Date(request.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                  </p>
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="text-sm font-medium text-gray-500">Project Description</h4>
                                <p className="text-sm text-gray-700 mt-1">{request.description}</p>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-500">No pending reservation requests</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="equipment">
                <Card>
                  <CardHeader>
                    <CardTitle>Equipment Management</CardTitle>
                    <CardDescription>
                      Update the status of fabrication equipment in the FABLAB
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AdminMaterialToggle materials={materials} />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;


import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Material } from "@/data/materialsData";
import MaterialCard from "./MaterialCard";

interface AdminMaterialToggleProps {
  materials: Material[];
}

const AdminMaterialToggle: React.FC<AdminMaterialToggleProps> = ({ materials: initialMaterials }) => {
  const [materials, setMaterials] = useState<Material[]>(initialMaterials);
  const { toast } = useToast();
  
  const handleStatusChange = (id: number, status: 'available' | 'in-use' | 'maintenance') => {
    const updatedMaterials = materials.map(material => {
      if (material.id === id) {
        return { ...material, status };
      }
      return material;
    });
    
    setMaterials(updatedMaterials);
    
    toast({
      title: "Status updated",
      description: `${materials.find(m => m.id === id)?.name} is now ${status}.`,
    });
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {materials.map((material) => (
        <MaterialCard 
          key={material.id} 
          material={material} 
          admin={true} 
          onStatusChange={handleStatusChange}
        />
      ))}
    </div>
  );
};

export default AdminMaterialToggle;

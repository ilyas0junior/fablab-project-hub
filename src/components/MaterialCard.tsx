
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Material } from "@/data/materialsData";
import { AlertCircle, CheckCircle, Clock } from "lucide-react";

interface MaterialCardProps {
  material: Material;
  admin?: boolean;
  onStatusChange?: (id: number, status: 'available' | 'in-use' | 'maintenance') => void;
}

const MaterialCard: React.FC<MaterialCardProps> = ({ material, admin = false, onStatusChange }) => {
  const getStatusBadge = () => {
    switch (material.status) {
      case "available":
        return (
          <Badge variant="outline" className="flex items-center gap-1 bg-green-50 text-green-600 border-green-200">
            <CheckCircle className="h-3 w-3" />
            Available
          </Badge>
        );
      case "in-use":
        return (
          <Badge variant="outline" className="flex items-center gap-1 bg-amber-50 text-amber-600 border-amber-200">
            <Clock className="h-3 w-3" />
            In Use
          </Badge>
        );
      case "maintenance":
        return (
          <Badge variant="outline" className="flex items-center gap-1 bg-red-50 text-red-600 border-red-200">
            <AlertCircle className="h-3 w-3" />
            Maintenance
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="material-card h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={material.image} 
          alt={material.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <Badge variant="secondary" className="mb-2 bg-fablab-light text-fablab-primary">
            {material.type}
          </Badge>
          {getStatusBadge()}
        </div>
        <CardTitle className="text-lg">{material.name}</CardTitle>
        <CardDescription className="text-sm text-gray-500">
          Model: {material.model}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-2 flex-grow">
        <p className="text-sm text-gray-600">{material.description}</p>
        
        {/* Specifications */}
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Specifications:</h4>
          <ul className="text-xs space-y-1 text-gray-600">
            {Object.entries(material.specifications).map(([key, value]) => (
              <li key={key} className="flex justify-between">
                <span className="font-medium">{key}:</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      
      {admin && onStatusChange && (
        <CardFooter className="p-4 border-t flex justify-between gap-2">
          <button 
            className={`px-3 py-1 rounded text-xs font-medium ${material.status === 'available' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600'}`}
            onClick={() => onStatusChange(material.id, 'available')}
          >
            Available
          </button>
          <button 
            className={`px-3 py-1 rounded text-xs font-medium ${material.status === 'in-use' ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-600'}`}
            onClick={() => onStatusChange(material.id, 'in-use')}
          >
            In Use
          </button>
          <button 
            className={`px-3 py-1 rounded text-xs font-medium ${material.status === 'maintenance' ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600'}`}
            onClick={() => onStatusChange(material.id, 'maintenance')}
          >
            Maintenance
          </button>
        </CardFooter>
      )}
    </Card>
  );
};

export default MaterialCard;

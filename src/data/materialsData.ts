
export interface Material {
  id: number;
  name: string;
  type: '3D Printer' | 'CNC Machine' | 'Laser Cutter' | 'Electronics' | 'Tools' | 'Other';
  model: string;
  description: string;
  image: string;
  status: 'available' | 'in-use' | 'maintenance';
  specifications: {
    [key: string]: string;
  };
}

export const materials: Material[] = [
  {
    id: 1,
    name: "Ultimaker S5",
    type: "3D Printer",
    model: "Ultimaker S5",
    description: "Professional dual-extrusion 3D printer with large build volume, ideal for functional prototypes and complex designs.",
    image: "https://images.unsplash.com/photo-1517589364675-f941d76e8b8f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=400",
    status: "available",
    specifications: {
      "Build Volume": "330 x 240 x 300 mm",
      "Layer Resolution": "0.1 - 0.4 mm",
      "Material Compatibility": "PLA, ABS, Nylon, TPU, PVA",
      "Print Speed": "Up to 24 mm³/s",
    }
  },
  {
    id: 2,
    name: "Prusa i3 MK3S+",
    type: "3D Printer",
    model: "Prusa i3 MK3S+",
    description: "Open-source desktop 3D printer known for reliability and print quality, perfect for students and beginners.",
    image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=400",
    status: "in-use",
    specifications: {
      "Build Volume": "250 x 210 x 210 mm",
      "Layer Resolution": "0.05 - 0.35 mm",
      "Material Compatibility": "PLA, PETG, ASA, ABS, Flex",
      "Print Speed": "Up to 200 mm/s",
    }
  },
  {
    id: 3,
    name: "Universal Laser Systems VLS 3.50",
    type: "Laser Cutter",
    model: "VLS 3.50",
    description: "Precision laser cutting and engraving system for a wide range of materials, with a user-friendly interface.",
    image: "https://images.unsplash.com/photo-1516313548402-efc7978ceba9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=400",
    status: "maintenance",
    specifications: {
      "Work Area": "610 x 305 mm",
      "Laser Type": "CO2",
      "Power": "30W",
      "Material Compatibility": "Wood, Acrylic, Paper, Fabric, Leather",
    }
  },
  {
    id: 4,
    name: "Shapeoko 4 XL",
    type: "CNC Machine",
    model: "Shapeoko 4 XL",
    description: "Desktop CNC router with a large cutting area, perfect for woodworking and aluminum machining.",
    image: "https://images.unsplash.com/photo-1565017130063-403435953231?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=400",
    status: "available",
    specifications: {
      "Working Area": "838 x 838 x 76 mm",
      "Spindle": "65mm DeWalt Router, 1.25HP",
      "Material Compatibility": "Wood, Plastic, Aluminum, PCB",
      "Precision": "±0.005\"",
    }
  },
  {
    id: 5,
    name: "Soldering Station",
    type: "Electronics",
    model: "Hakko FX-888D",
    description: "Digital soldering station with temperature control, ideal for electronics projects and PCB work.",
    image: "https://images.unsplash.com/photo-1563293815-7d1c7a8ce8a0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=400",
    status: "available",
    specifications: {
      "Temperature Range": "200°C - 480°C",
      "Power Consumption": "70W",
      "Heat Up Time": "20 seconds to 350°C",
      "Features": "Digital display, Sleep mode, Password protection",
    }
  },
  {
    id: 6,
    name: "Oscilloscope",
    type: "Electronics",
    model: "Rigol DS1054Z",
    description: "Digital oscilloscope for electronic signal measurement and analysis, with 4 channels and multiple functions.",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=400",
    status: "in-use",
    specifications: {
      "Bandwidth": "50 MHz",
      "Channels": "4",
      "Sample Rate": "1 GSa/s",
      "Memory Depth": "24 Mpts",
      "Features": "FFT, Math operations, USB connection",
    }
  }
];

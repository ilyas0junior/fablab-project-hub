
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  creator: string;
  date: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Smart Plant Monitoring System",
    description: "An IoT device that monitors soil moisture, light, and temperature for indoor plants. Built using Arduino and 3D printed components.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=400",
    category: "IoT",
    creator: "Team GreenThumb",
    date: "2023-10-15",
    featured: true
  },
  {
    id: 2,
    title: "Modular Desk Organizer",
    description: "A customizable desk organization system with interchangeable modules. Designed in CAD and fabricated using laser cutting.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=400",
    category: "Furniture",
    creator: "Sarah Chen",
    date: "2023-11-02",
    featured: true
  },
  {
    id: 3,
    title: "Drone Frame Prototype",
    description: "A lightweight yet durable drone frame designed for maneuverability and crash resistance. Created using carbon fiber and 3D printed joints.",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=400",
    category: "Robotics",
    creator: "Drone Team",
    date: "2023-09-20",
    featured: true
  },
  {
    id: 4,
    title: "Interactive LED Wall",
    description: "A motion-responsive LED wall installation that changes patterns based on movement detected by sensors.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=400",
    category: "Electronics",
    creator: "Light Chasers",
    date: "2023-12-05"
  },
  {
    id: 5,
    title: "Eco-Friendly Phone Case",
    description: "A biodegradable phone case created from a blend of recycled materials and bioplastics.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=400",
    category: "Sustainable Design",
    creator: "Eco Design Club",
    date: "2023-10-28"
  },
  {
    id: 6,
    title: "Automated Recycling Sorter",
    description: "A machine that uses computer vision to automatically sort different types of recyclable materials.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-4.0.3&q=80&w=400",
    category: "Automation",
    creator: "Green Engineers",
    date: "2023-11-15"
  }
];

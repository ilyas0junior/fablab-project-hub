
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Project } from "@/data/projectsData";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="project-card overflow-hidden h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <Badge variant="secondary" className="mb-2 bg-fablab-light text-fablab-primary">
            {project.category}
          </Badge>
          {project.featured && (
            <Badge variant="default" className="bg-fablab-primary">
              Featured
            </Badge>
          )}
        </div>
        <CardTitle className="text-lg">{project.title}</CardTitle>
        <CardDescription className="flex items-center text-sm text-gray-500 mt-1">
          <CalendarIcon className="h-3 w-3 mr-1" />
          {project.date}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-2 flex-grow">
        <p className="text-sm text-gray-600">{project.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 border-t">
        <p className="text-sm text-gray-500">Created by <span className="font-medium">{project.creator}</span></p>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

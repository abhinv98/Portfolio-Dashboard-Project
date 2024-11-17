import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Building,
  Calendar,
  Star,
  Briefcase,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

// Map screenshots to projects
const projectScreenshots = {
  "Inkfusion - PDF Chat SaaS": "SaaS application.png",
  "AI-enabled Text Summarizer": "Screenshot 2023-09-18 124730.png",
  "E-commerce Price Tracker": "Screenshot 2023-10-06 114143.png",
  "Car Stop": "Car Stop - rental car service landing page.png",
  "E-commerce Websites": "circzles.png"
};

const ProjectsGrid = () => {
  const [selectedType, setSelectedType] = useState("all");

  const projectTypes = [
    { id: "all", label: "All Projects", icon: Star },
    { id: "professional", label: "Professional", icon: Briefcase },
    { id: "personal", label: "Personal", icon: Building },
  ];

  // Filter projects based on selected type
  const filteredProjects =
    selectedType === "all"
      ? portfolioData.projects.list
      : portfolioData.projects.list.filter(
          (project) => project.type.toLowerCase() === selectedType.toLowerCase()
        );

  // ProjectCard Component
  const ProjectCard = ({ project }) => {
    return (
      <div
        className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg
                   transition-all duration-300 hover:-translate-y-1 overflow-hidden
                   border border-gray-100 dark:border-gray-700"
      >
        {/* Project Image with Overlay */}
        <div className="aspect-video bg-gray-100 dark:bg-gray-700 relative overflow-hidden">
          <img
            src={projectScreenshots[project.title] 
                ? `/screenshots/${projectScreenshots[project.title]}`
                : "/api/placeholder/400/300"}
            alt={project.title}
            className="w-full h-full object-cover transform transition-transform duration-500 
                     group-hover:scale-110"
          />

          {/* Overlay with Links */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full hover:bg-primary-50 transition-colors"
              >
                <ExternalLink size={20} className="text-primary-500" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full hover:bg-primary-50 transition-colors"
              >
                <Github size={20} className="text-primary-500" />
              </a>
            )}
          </div>
        </div>

        {/* Project Info */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium
                        ${
                          project.type === "Professional"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                        }`}
            >
              {project.type}
            </span>
          </div>

          {/* Company Info for Professional Projects */}
          {project.company && (
            <div className="flex items-center text-sm text-primary-600 dark:text-primary-400 mb-3">
              <Building size={16} className="mr-2" />
              <span>{project.company}</span>
              {project.status && (
                <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                  {project.status}
                </span>
              )}
            </div>
          )}

          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            {project.description}
          </p>

          {/* Project Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-2 mb-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-primary-600 dark:text-primary-400 font-semibold">
                    {value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                    {key}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Project Highlights */}
          <div className="mb-4">
            <div className="grid grid-cols-2 gap-2">
              {project.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                >
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            <Calendar size={16} className="mr-2" />
            <span>{project.date}</span>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                         bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Type Filter */}
      <div className="flex flex-wrap gap-4 mb-6">
        {projectTypes.map((type) => {
          const Icon = type.icon;
          return (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg 
                       transition-all duration-300 transform hover:scale-105
                       ${
                         selectedType === type.id
                           ? "bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 shadow-md"
                           : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                       }`}
            >
              <Icon size={18} />
              <span>{type.label}</span>
              <span className="ml-2 text-sm opacity-75">
                (
                {
                  portfolioData.projects.list.filter((p) =>
                    type.id === "all" ? true : p.type.toLowerCase() === type.id
                  ).length
                }
                )
              </span>
            </button>
          );
        })}
      </div>

      {/* Section Headers */}
      {selectedType === "all" && (
        <>
          {/* Professional Projects Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Briefcase className="mr-2" size={24} />
              Professional Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioData.projects.list
                .filter((project) => project.type === "Professional")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </div>

          {/* Personal Projects Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Building className="mr-2" size={24} />
              Personal Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioData.projects.list
                .filter((project) => project.type === "Personal")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </div>
        </>
      )}

      {/* Filtered Projects */}
      {selectedType !== "all" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <Building className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-semibold text-gray-900 dark:text-white">
            No projects found
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            No projects match the selected filter.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectsGrid;
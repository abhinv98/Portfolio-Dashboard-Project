import React, { useState, useCallback } from "react";
import {
  Code,
  Server,
  Database,
  Layout,
  Book,
  Box,
  Star,
  Clock,
  GitBranch,
  Briefcase,
  CheckCircle,
  Zap,
  X,
} from "lucide-react";
import { ForceGraph2D } from "react-force-graph";
import { useTheme } from "../context/ThemeContext";
import { portfolioData } from "../data/portfolioData";

const SkillsChart = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedExpertise, setSelectedExpertise] = useState("all");
  const [selectedNode, setSelectedNode] = useState(null);
  const [viewMode, setViewMode] = useState("list"); // "list" or "graph"

  // Icon mapping for dynamic icon usage
  const iconMap = {
    Box,
    Layout,
    Server,
    Database,
    Code,
    Book,
    Star,
    GitBranch,
    CheckCircle,
    Zap,
  };

  // Graph data structure for network visualization
  const graphData = {
    nodes: [
      // Core Categories
      { id: "frontend", group: 1, label: "Frontend", size: 20 },
      { id: "backend", group: 2, label: "Backend", size: 20 },
      { id: "database", group: 3, label: "Database", size: 20 },
      { id: "languages", group: 4, label: "Languages", size: 20 },
      { id: "tools", group: 5, label: "Tools", size: 20 },

      // Generate skill nodes from portfolio data
      ...Object.entries(portfolioData.skills).flatMap(
        ([category, categorySkills]) =>
          categorySkills.map((skill) => ({
            id: skill.name,
            group:
              portfolioData.skillCategories.findIndex(
                (cat) => cat.id === category
              ) + 1,
            label: skill.name,
            size:
              skill.level === "ADVANCED"
                ? 15
                : skill.level === "INTERMEDIATE"
                  ? 12
                  : 10,
            level: skill.level,
            details: skill.details,
          }))
      ),
    ],
    links: [
      // Generate links between categories and their skills
      ...Object.entries(portfolioData.skills).flatMap(
        ([category, categorySkills]) =>
          categorySkills.map((skill) => ({
            source: category,
            target: skill.name,
            value: 1,
          }))
      ),
      // Add cross-category relationships
      { source: "Next.js", target: "Node.js", value: 0.5 },
      { source: "MongoDB", target: "Node.js", value: 0.5 },
      { source: "PostgreSQL", target: "Python", value: 0.5 },
      { source: "APIs", target: "Node.js", value: 0.5 },
    ],
  };

  // Helper function to get filtered skills
  const getDisplaySkills = () => {
    let filteredSkills = [];

    // First filter by category
    if (selectedCategory === "all") {
      filteredSkills = Object.values(portfolioData.skills).flat();
    } else {
      filteredSkills = portfolioData.skills[selectedCategory] || [];
    }

    // Then filter by expertise level if selected
    if (selectedExpertise !== "all") {
      filteredSkills = filteredSkills.filter(
        (skill) => skill.level === selectedExpertise
      );
    }

    return filteredSkills;
  };

  // Calculate counts for expertise levels
  const getExpertiseCounts = () => {
    const currentSkills =
      selectedCategory === "all"
        ? Object.values(portfolioData.skills).flat()
        : portfolioData.skills[selectedCategory] || [];

    return Object.keys(portfolioData.skillLevels).reduce((acc, level) => {
      acc[level] = currentSkills.filter(
        (skill) => skill.level === level
      ).length;
      return acc;
    }, {});
  };

  // Handle node click in graph view
  const handleNodeClick = useCallback((node) => {
    setSelectedNode(node);
  }, []);

  // Compute expertise counts once
  const expertiseCounts = getExpertiseCounts();

  return (
    <div className="space-y-8 animate-fade-in">
      {/* View Toggle */}
      <div className="flex justify-end">
        <button
          onClick={() =>
            setViewMode((prev) => (prev === "list" ? "graph" : "list"))
          }
          className="flex items-center space-x-2 px-4 py-2 rounded-lg 
                   bg-primary-100 dark:bg-primary-900/20 text-primary-600 
                   dark:text-primary-400 hover:bg-primary-200 
                   dark:hover:bg-primary-900/40 transition-colors"
        >
          {viewMode === "list" ? (
            <>
              <GitBranch size={18} />
              <span>View as Network</span>
            </>
          ) : (
            <>
              <Layout size={18} />
              <span>View as List</span>
            </>
          )}
        </button>
      </div>

      {viewMode === "list" ? (
        <>
          {/* Category Selector */}
          <div className="flex flex-wrap gap-4 mb-8">
            {portfolioData.skillCategories.map((category) => {
              const Icon = iconMap[category.icon];
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setSelectedExpertise("all");
                  }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg 
                             transition-all duration-300 transform hover:scale-105
                             ${
                               selectedCategory === category.id
                                 ? "bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 shadow-md"
                                 : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                             }`}
                >
                  <Icon size={18} />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Filters Display */}
          {(selectedCategory !== "all" || selectedExpertise !== "all") && (
            <div className="flex items-center gap-2 mb-6 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Active filters:
              </span>
              {selectedCategory !== "all" && (
                <span className="flex items-center gap-1 px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full text-sm">
                  {
                    portfolioData.skillCategories.find(
                      (cat) => cat.id === selectedCategory
                    )?.label
                  }
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className="hover:text-primary-800 dark:hover:text-primary-300"
                  >
                    <X size={14} />
                  </button>
                </span>
              )}
              {selectedExpertise !== "all" && (
                <span
                  className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm
                              ${portfolioData.skillLevels[selectedExpertise].bgColor} 
                              ${portfolioData.skillLevels[selectedExpertise].textColor}`}
                >
                  {portfolioData.skillLevels[selectedExpertise].label}
                  <button
                    onClick={() => setSelectedExpertise("all")}
                    className="hover:opacity-75"
                  >
                    <X size={14} />
                  </button>
                </span>
              )}
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedExpertise("all");
                }}
                className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 ml-2"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Skill Level Legend with Filtering */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {Object.entries(portfolioData.skillLevels).map(([key, level]) => {
              const Icon = iconMap[level.icon];
              const count = expertiseCounts[key] || 0;
              return (
                <button
                  key={key}
                  onClick={() =>
                    setSelectedExpertise(
                      selectedExpertise === key ? "all" : key
                    )
                  }
                  className={`p-4 rounded-lg transition-all duration-300 
                             ${
                               selectedExpertise === key
                                 ? `${level.bgColor} ring-2 ring-primary-500`
                                 : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                             } cursor-pointer relative group`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <Icon size={20} className={level.textColor} />
                      <span className={`font-medium ${level.textColor}`}>
                        {level.label}
                      </span>
                    </div>
                    <span className={`${level.textColor} text-sm font-medium`}>
                      {count}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {level.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {getDisplaySkills().map((skill) => {
              const skillLevel = portfolioData.skillLevels[skill.level];
              const LevelIcon = iconMap[skillLevel.icon];

              return (
                <div
                  key={skill.name}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md
                           transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {skill.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {skill.description}
                        </p>
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full ${skillLevel.bgColor}`}
                      >
                        <div className="flex items-center space-x-2">
                          <LevelIcon
                            size={16}
                            className={skillLevel.textColor}
                          />
                          <span
                            className={`text-sm font-medium ${skillLevel.textColor}`}
                          >
                            {skillLevel.label}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <Clock size={16} className="text-gray-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {skill.details.experience}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Briefcase size={16} className="text-gray-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {skill.details.projectCount}{" "}
                            {typeof skill.details.projectCount === "number"
                              ? "projects"
                              : ""}
                          </span>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Recent Projects
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {skill.details.recentProjects.map((project) => (
                            <span
                              key={project}
                              className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700
                                       text-gray-600 dark:text-gray-300"
                            >
                              {project}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {skill.details.keyAchievements.map(
                            (achievement, index) => (
                              <li
                                key={index}
                                className="flex items-start space-x-2"
                              >
                                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-500" />
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  {achievement}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {getDisplaySkills().length === 0 && (
            <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg">
              <Box className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                No skills found
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Try adjusting your filters or selecting a different category
              </p>
            </div>
          )}
        </>
      ) : (
        // Network Graph View
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 relative min-h-[600px]">
          <ForceGraph2D
            graphData={graphData}
            nodeLabel={(node) => {
              if (!node || !node.details) return "";
              return `
                ${node.label}
                ${node.details.experience}
                ${node.details.projectCount} projects
              `;
            }}
            nodeColor={(node) => {
              const colors = {
                1: "#3B82F6", // Frontend - Blue
                2: "#10B981", // Backend - Green
                3: "#8B5CF6", // Database - Purple
                4: "#F59E0B", // Languages - Yellow
                5: "#EC4899", // Tools - Pink
              };
              return colors[node.group];
            }}
            nodeRelSize={6}
            nodeCanvasObject={(node, ctx, globalScale) => {
              const label = node.label;
              const fontSize = 12 / globalScale;
              ctx.font = `${fontSize}px Sans-Serif`;
              const textWidth = ctx.measureText(label).width;
              const bckgDimensions = [textWidth, fontSize].map(
                (n) => n + fontSize * 0.2
              );

              // Node background
              ctx.fillStyle =
                theme === "dark" ? "#1F2937" : "rgba(255, 255, 255, 0.8)";
              ctx.fillRect(
                node.x - bckgDimensions[0] / 2,
                node.y - bckgDimensions[1] / 2,
                ...bckgDimensions
              );

              // Node text
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillStyle = theme === "dark" ? "#E5E7EB" : "#111827";
              ctx.fillText(label, node.x, node.y);

              // Highlight on hover
              if (node.hover) {
                ctx.beginPath();
                ctx.arc(node.x, node.y, 8, 0, 2 * Math.PI);
                ctx.fillStyle =
                  theme === "dark"
                    ? "rgba(99, 102, 241, 0.2)"
                    : "rgba(99, 102, 241, 0.1)";
                ctx.fill();
              }
            }}
            linkWidth={(link) => link.value * 2}
            linkColor={() => (theme === "dark" ? "#4B5563" : "#9CA3AF")}
            onNodeClick={handleNodeClick}
            onNodeHover={(node) => {
              if (node) {
                node.hover = true;
              }
              graphData.nodes.forEach((n) => {
                if (n !== node) n.hover = false;
              });
            }}
            cooldownTicks={100}
            // Custom tooltip props
            nodeCanvasObjectMode={() => "after"}
            enableNodeDrag={true}
            enableZoomPanInteraction={true}
          />

          {/* Node Details Popup */}
          {selectedNode && selectedNode.details && (
            <div className="absolute top-4 right-4 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg max-w-sm">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                {selectedNode.label}
              </h3>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                <p className="mb-2">
                  Experience: {selectedNode.details.experience}
                </p>
                <p className="mb-2">
                  Projects: {selectedNode.details.projectCount}
                </p>
                <div className="mb-2">
                  <p className="font-medium mb-1">Recent Projects:</p>
                  <div className="flex flex-wrap gap-1">
                    {selectedNode.details.recentProjects.map((project, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-primary-100 dark:bg-primary-900/20 
                                               text-primary-600 dark:text-primary-400 px-2 py-1 rounded-full"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedNode(null)}
                  className="text-primary-600 dark:text-primary-400 hover:underline mt-2"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SkillsChart;

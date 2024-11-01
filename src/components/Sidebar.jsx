import React from "react";
import {
  Home,
  Code,
  FolderGit2,
  BookText,
  MessageSquare,
  Github,
  Linkedin,
  Instagram,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import profileImage from "../assets/images/abhinavraiphoto.jpg";

const Sidebar = ({
  isMenuOpen,
  setIsMenuOpen,
  selectedSection,
  setSelectedSection,
}) => {
  const menuItems = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "experience", label: "Experience", icon: BookText },
    { id: "contact", label: "Contact", icon: MessageSquare },
  ];

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full bg-white dark:bg-gray-800 
                    shadow-lg transform transition-all duration-300 ease-in-out
                    border-r border-gray-100 dark:border-gray-700 z-30
                    ${isMenuOpen ? "w-64" : "w-20"}
                    flex flex-col`}
      >
        {/* Main Content Container with Scroll */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Profile Section */}
          <div
            className={`pt-8 pb-6 ${isMenuOpen ? "px-6" : "px-3"} ${isMenuOpen ? "text-center" : "flex justify-center"}`}
          >
            <div
              className={`relative mx-auto mb-4 ${isMenuOpen ? "w-24 h-24" : "w-14 h-14"}`}
            >
              {isMenuOpen && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl transform rotate-6 opacity-75" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-300 to-primary-500 rounded-xl transform -rotate-6 opacity-75" />
                </>
              )}
              <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-white dark:border-gray-700 shadow-lg">
                <img
                  src={profileImage}
                  alt="Abhinav Rai"
                  className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            {isMenuOpen && (
              <>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mt-3">
                  {portfolioData.user.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-0.5">
                  {portfolioData.user.title}
                </p>
              </>
            )}
          </div>

          {/* Navigation - Scrollable */}
          <nav className="flex-1 overflow-y-auto">
            <div className="space-y-1 px-3">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedSection(item.id);
                      if (window.innerWidth < 768) {
                        setIsMenuOpen(false);
                      }
                    }}
                    className={`flex items-center w-full rounded-lg 
                              transition-all duration-200 
                              ${
                                selectedSection === item.id
                                  ? "bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400"
                                  : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
                              }
                              ${
                                isMenuOpen
                                  ? "px-3 py-2.5"
                                  : "justify-center p-2.5"
                              }`}
                    title={!isMenuOpen ? item.label : ""}
                  >
                    <Icon
                      className={`flex-shrink-0 ${isMenuOpen ? "w-5 h-5" : "w-6 h-6"}`}
                      strokeWidth={1.5}
                    />
                    {isMenuOpen && (
                      <span className="ml-2.5 font-medium text-sm whitespace-nowrap">
                        {item.label}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Social Links - Fixed at Bottom */}
          <div className="p-3 border-t border-gray-100 dark:border-gray-700">
            <div
              className={`flex ${isMenuOpen ? "space-x-3 justify-center" : "flex-col space-y-3 items-center"}`}
            >
              {Object.entries({
                Github: [portfolioData.social.github, Github],
                LinkedIn: [portfolioData.social.linkedin, Linkedin],
                Instagram: [portfolioData.social.instagram, Instagram],
              }).map(([name, [url, Icon]]) => (
                <a
                  key={name}
                  href={url}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 
                           dark:hover:text-primary-400 transition-colors p-2 rounded-lg
                           hover:bg-gray-100 dark:hover:bg-gray-700"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Integrated Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`absolute -right-5 top-16 h-10 
                     bg-white dark:bg-gray-800 
                     transition-all duration-300
                     hover:bg-gray-100 dark:hover:bg-gray-700
                     border-r border-t border-b border-gray-200 dark:border-gray-600
                     rounded-r-md`}
          style={{ width: "20px" }}
          aria-label={isMenuOpen ? "Collapse Sidebar" : "Expand Sidebar"}
        >
          {isMenuOpen ? (
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;

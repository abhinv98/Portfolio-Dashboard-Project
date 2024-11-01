import React from "react";
import {
  Home,
  Code,
  FolderGit2,
  BookText,
  MessageSquare,
  Github,
  Linkedin,
  Twitter,
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
                    shadow-lg w-64 transform transition-all duration-300 ease-in-out
                    border-r border-gray-100 dark:border-gray-700 z-30
                    ${isMenuOpen ? "translate-x-0" : "-translate-x-64"}`}
      >
        <div className="p-6">
          {/* Toggle Button - Inside Sidebar */}
          {isMenuOpen && (
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute right-4 top-4 p-2 rounded-lg hover:bg-gray-100 
                       dark:hover:bg-gray-700 transition-colors"
              aria-label="Close Sidebar"
            >
              <div className="flex flex-col gap-1.5 w-4">
                <span className="block w-4 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 -rotate-45 translate-y-2" />
                <span className="block w-4 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 opacity-0" />
                <span className="block w-4 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 rotate-45 -translate-y-2" />
              </div>
            </button>
          )}

          <div className="text-center mb-8 mt-8">
            <div className="relative w-24 h-24 mx-auto mb-4">
              {/* Profile Picture Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl transform rotate-6 opacity-75" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-300 to-primary-500 rounded-xl transform -rotate-6 opacity-75" />
              {/* Profile Picture */}
              <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-white dark:border-gray-700 shadow-lg">
                <img
                  src={profileImage}
                  alt="Abhinav Rai"
                  className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {portfolioData.user.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {portfolioData.user.title}
            </p>
          </div>

          <nav className="space-y-2">
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
                  className={`flex items-center space-x-2 w-full p-3 rounded-lg 
                            transition-all duration-200
                            ${
                              selectedSection === item.id
                                ? "bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400"
                                : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
                            }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="absolute bottom-0 w-full p-6 border-t border-gray-100 dark:border-gray-700">
          <div className="flex space-x-4 justify-center">
            {Object.entries({
              Github: [portfolioData.social.github, Github],
              LinkedIn: [portfolioData.social.linkedin, Linkedin],
              Twitter: [portfolioData.social.twitter, Twitter],
            }).map(([name, [url, Icon]]) => (
              <a
                key={name}
                href={url}
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 
                         dark:hover:text-primary-400 transition-colors p-2 rounded-full
                         hover:bg-gray-100 dark:hover:bg-gray-700"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Toggle Button - Outside Sidebar when closed */}
      {!isMenuOpen && (
        <button
          onClick={() => setIsMenuOpen(true)}
          className="fixed left-4 top-4 z-30 p-2 bg-white dark:bg-gray-800 rounded-lg 
                   shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors
                   border border-gray-200 dark:border-gray-700"
          aria-label="Open Sidebar"
        >
          <div className="flex flex-col gap-1.5 w-4">
            <span className="block w-4 h-0.5 bg-gray-600 dark:bg-gray-300" />
            <span className="block w-4 h-0.5 bg-gray-600 dark:bg-gray-300" />
            <span className="block w-4 h-0.5 bg-gray-600 dark:bg-gray-300" />
          </div>
        </button>
      )}

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

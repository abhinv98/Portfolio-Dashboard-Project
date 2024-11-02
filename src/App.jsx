import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import Sidebar from "./components/Sidebar";
import Loading from "./components/Loading";
import OverviewDashboard from "./components/OverviewDashboard";
import ProjectsGrid from "./components/ProjectsGrid";
import SkillsChart from "./components/SkillsChart";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [selectedSection, setSelectedSection] = useState("overview");
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Handle loading state and progress
  useEffect(() => {
    let progressTimer;
    let completionTimer;

    if (isLoading) {
      progressTimer = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressTimer);
            return 100;
          }
          return prev + 1;
        });
      }, 30);
    }

    if (loadingProgress === 100) {
      completionTimer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }

    return () => {
      if (progressTimer) clearInterval(progressTimer);
      if (completionTimer) clearTimeout(completionTimer);
    };
  }, [isLoading, loadingProgress]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderSection = () => {
    const contentClasses =
      "space-y-8 animate-fade-in transition-all duration-300";
    const containerClasses =
      "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm transition-all duration-300";

    switch (selectedSection) {
      case "overview":
        return (
          <div className={contentClasses}>
            <div className={containerClasses}>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Overview
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Welcome to my portfolio dashboard. I'm a Web Developer with
                  expertise in frontend and backend technologies, including
                  Next.js, Node.js, Python, and Django.
                </p>
                <p>
                  Currently working at The Qwerty Ink, I've successfully
                  developed and launched multiple e-commerce platforms and web
                  applications. My focus is on creating responsive,
                  user-friendly applications using cutting-edge technologies and
                  best practices.
                </p>
                <p>
                  With experience in both professional and personal projects, I
                  combine technical excellence with creative problem-solving to
                  deliver robust and innovative solutions.
                </p>
              </div>
            </div>
            <OverviewDashboard />
          </div>
        );

      case "skills":
        return (
          <div className={containerClasses}>
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Skills & Expertise
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                A comprehensive overview of my technical skills and proficiency
                levels
              </p>
              <SkillsChart />
            </div>
          </div>
        );

      case "projects":
        return (
          <div className={containerClasses}>
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Projects
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Showcase of my recent projects and contributions
              </p>
              <ProjectsGrid />
            </div>
          </div>
        );

      case "experience":
        return (
          <div className="animate-fade-in">
            <Experience />
          </div>
        );

      case "contact":
        return (
          <div className={containerClasses}>
            <Contact />
          </div>
        );

      default:
        return null;
    }
  };

  if (isLoading || loadingProgress < 100) {
    return (
      <Loading onProgress={setLoadingProgress} progress={loadingProgress} />
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative theme-transition">
        {/* Theme Toggle */}
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>

        {/* Sidebar */}
        <Sidebar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />

        {/* Main Content */}
        <main
          className={`
            transition-all duration-300 ease-in-out 
            ${isMenuOpen ? "md:ml-64" : "md:ml-20"} 
            w-full 
            p-4 sm:p-6 md:p-8
            ${isMenuOpen ? "max-w-[calc(100%-16rem)]" : "max-w-[calc(100%-5rem)]"}
            ml-0 md:ml-auto
          `}
        >
          <div
            className={`
            max-w-7xl 
            mx-auto 
            transition-all 
            duration-300
            ${isMenuOpen ? "container-expanded" : "container-collapsed"}
          `}
          >
            {renderSection()}
          </div>
        </main>

        {/* Mobile Overlay */}
        {isMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;

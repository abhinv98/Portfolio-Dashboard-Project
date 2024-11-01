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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const renderSection = () => {
    switch (selectedSection) {
      case "overview":
        return (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
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
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
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
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
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
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <Contact />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative theme-transition">
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>

        <Sidebar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />

        <main
          className={`transition-all duration-300 ease-in-out ${
            isMenuOpen ? "md:ml-64" : "ml-0"
          } p-8`}
        >
          {renderSection()}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;

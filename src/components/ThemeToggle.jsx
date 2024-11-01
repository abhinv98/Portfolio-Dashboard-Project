import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun
          className={`absolute inset-0 transform transition-transform duration-500 rotate-0 dark:-rotate-90 ${
            theme === "light" ? "opacity-100" : "opacity-0"
          } text-yellow-500`}
          size={24}
        />
        <Moon
          className={`absolute inset-0 transform transition-transform duration-500 rotate-90 dark:rotate-0 ${
            theme === "dark" ? "opacity-100" : "opacity-0"
          } text-blue-500`}
          size={24}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;

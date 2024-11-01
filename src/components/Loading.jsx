import React from "react";
import { Code, Braces, Terminal } from "lucide-react";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-primary-700/[0.05] bg-[size:60px_60px]" />
        <div className="absolute h-full w-full">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              {i % 3 === 0 ? (
                <Code className="w-12 h-12 text-primary-500/20" />
              ) : i % 3 === 1 ? (
                <Braces className="w-12 h-12 text-primary-500/20" />
              ) : (
                <Terminal className="w-12 h-12 text-primary-500/20" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main loading content */}
      <div className="relative z-10">
        {/* Central loading animation */}
        <div className="relative flex items-center justify-center">
          {/* Outer rotating ring */}
          <div className="absolute w-40 h-40 rounded-full border-4 border-dashed border-primary-300 dark:border-primary-700 animate-spin-slow" />

          {/* Middle pulsing circle */}
          <div className="absolute w-32 h-32 rounded-full bg-primary-100 dark:bg-primary-900/50 animate-pulse-scale opacity-50" />

          {/* Inner spinning circles */}
          <div className="relative w-24 h-24">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-full border-4 border-primary-500 opacity-20 animate-spin-slow"
                style={{
                  animationDelay: `${i * -1}s`,
                  transform: `scale(${1 + i * 0.2})`,
                }}
              />
            ))}

            {/* Center dot */}
            <div className="absolute inset-0 m-auto w-4 h-4 rounded-full bg-primary-500 animate-pulse" />
          </div>
        </div>

        {/* Loading text */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 animate-fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-700">
              Portfolio
            </span>
          </h2>

          {/* Loading progress dots */}
          <div className="flex items-center justify-center gap-1.5 text-primary-500">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-current animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-8 relative">
          <div className="w-48 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="absolute inset-0 w-full rounded-full">
              <div className="h-full w-full bg-gradient-to-r from-primary-500 to-primary-600 animate-progress rounded-full" />
            </div>
          </div>
        </div>

        {/* Status text */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 animate-pulse">
            Preparing your experience...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;

import React, { useMemo } from "react";
import { Sparkles, Boxes, Layers, Gem } from "lucide-react";

const LoadingScreen = ({ progress: externalProgress }) => {
  const steps = useMemo(
    () => [
      { text: "Initializing Experience", Icon: Sparkles },
      { text: "Loading Assets", Icon: Boxes },
      { text: "Preparing Interface", Icon: Layers },
      { text: "Final Touches", Icon: Gem },
    ],
    []
  );

  const currentStep = useMemo(() => {
    if (externalProgress < 25) return 0;
    if (externalProgress < 50) return 1;
    if (externalProgress < 75) return 2;
    return 3;
  }, [externalProgress]);

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full opacity-30 dark:opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-md p-8">
        {/* Main loading container */}
        <div className="relative backdrop-blur-lg bg-white/10 dark:bg-gray-800/10 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/20">
          {/* Loading animation */}
          <div className="flex justify-center mb-12">
            <div className="relative w-40 h-40">
              {/* Dynamic rotating rings */}
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 rounded-full border-2 border-primary-500/30 dark:border-primary-400/30"
                  style={{
                    animation: `spin ${6 + i * 2}s linear infinite ${i * 0.5}s`,
                    transform: `rotateX(${60 + i * 15}deg) rotateY(${i * 10}deg)`,
                  }}
                />
              ))}

              {/* Glowing center container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-20 h-20">
                  {/* Glowing background */}
                  <div className="absolute inset-0 bg-primary-500/20 dark:bg-primary-400/20 rounded-xl blur-md" />

                  {/* Icon container */}
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center transform transition-all duration-500 hover:scale-105">
                    {React.createElement(steps[currentStep].Icon, {
                      className:
                        "w-10 h-10 text-primary-500 dark:text-primary-400 animate-pulse",
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Loading content */}
          <div className="space-y-8">
            {/* Title and description */}
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500">
                Portfolio
              </h2>
              <div className="h-6 flex items-center justify-center">
                <p className="text-sm text-gray-600 dark:text-gray-300 transition-all duration-500 animate-pulse">
                  {steps[currentStep].text}
                </p>
              </div>
            </div>

            {/* Progress indicator */}
            <div className="space-y-3">
              <div className="h-1.5 w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                <div
                  className="h-full rounded-full transition-all duration-300 relative overflow-hidden bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500"
                  style={{ width: `${externalProgress}%` }}
                >
                  <div className="absolute inset-0 bg-primary-400/30 animate-shimmer" />
                </div>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400 font-medium">
                  {Math.round(externalProgress)}%
                </span>
                <span className="text-primary-500 dark:text-primary-400 font-medium">
                  {externalProgress === 100 ? "Complete!" : "Loading..."}
                </span>
              </div>
            </div>

            {/* Progress steps */}
            <div className="flex justify-center gap-3">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`
                    w-2 h-2 rounded-full transition-all duration-500
                    ${
                      index === currentStep
                        ? "bg-gradient-to-r from-primary-500 to-purple-500 scale-150"
                        : index < currentStep
                          ? "bg-primary-400 dark:bg-primary-500"
                          : "bg-gray-300 dark:bg-gray-600"
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Completion overlay */}
        {externalProgress === 100 && (
          <div
            className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 rounded-2xl transition-all duration-500"
            style={{
              animation: "fadeIn 0.5s ease-out",
            }}
          >
            <div className="text-center transform transition-all duration-500 scale-110">
              <Sparkles className="w-12 h-12 text-primary-500 dark:text-primary-400 mx-auto mb-4 animate-pulse" />
              <h3 className="text-2xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 mb-2">
                Welcome!
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Launching your experience...
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;

import React from "react";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  Building,
  MapPin,
  ExternalLink,
  Award,
} from "lucide-react";

const Experience = () => {
  const professionalExperience = [
    {
      title: "Web Developer",
      company: "The Qwerty Ink",
      location: "Navi Mumbai, MH, India",
      duration: "Dec 2023 - Present",
      type: "Full-time",
      projects: [
        {
          name: "E-Commerce Platforms",
          description: [
            "Successfully developed and launched two E-Commerce websites using Wix - Cogzart and Circzles",
            "Implemented user-friendly interfaces and robust backend systems with Razor pay integration",
            "Optimized website performance using Google Search Console and Analytics",
            "Achieved approximately 100 unique sales within 45 days of launch",
          ],
          technologies: ["Wix", "Razorpay", "Analytics", "SEO"],
          metrics: {
            sales: "100+",
            timeframe: "45 days",
            platforms: 2,
          },
        },
        {
          name: "Affiliate Marketing Dashboard",
          description: [
            "Currently developing an innovative Affiliate Marketing Dashboard using Next.js, Node.js, and MongoDB",
            "Implementing features for tracking affiliate performance and managing commissions",
            "Designing intuitive user interfaces for dashboard analytics",
            "Building robust backend systems for data management",
          ],
          technologies: ["Next.js", "Node.js", "MongoDB", "Analytics"],
          status: "In Development",
        },
      ],
      skills: [
        "Web Development",
        "E-commerce",
        "Full Stack Development",
        "UI/UX Design",
        "Performance Optimization",
        "Analytics",
      ],
      achievements: [
        "Launched 2 successful e-commerce platforms",
        "100+ sales in first 45 days",
        "Optimized website performance",
      ],
      companyUrl: "#",
    },
  ];

  const education = [
    {
      degree: "B.Tech in Computer Engineering",
      institution: "Pillai College of Engineering",
      // duration: "Graduated May 2023",
      grade: "CGPA – 7.35",
      location: "Navi Mumbai, MH, India",
      courses: [
        "Computer Science Fundamentals",
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Web Technologies",
        "Software Engineering",
      ],
      projects: [
        "E-commerce Platform Development",
        "Machine Learning Applications",
        "Web Development Projects",
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {/* Professional Experience */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <Briefcase className="mr-2" size={24} />
          Professional Experience
        </h2>

        <div className="space-y-8">
          {professionalExperience.map((experience, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-primary-200 dark:border-primary-800 last:pb-0"
            >
              {/* Animated Timeline Dot */}
              <div className="absolute -left-2.5 w-5 h-5 bg-primary-100 dark:bg-primary-900 rounded-full border-4 border-primary-500 animate-pulse" />

              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {experience.title}
                  </h3>
                  <span
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 
                             text-primary-600 dark:text-primary-400 rounded-full text-sm
                             animate-fade-in"
                  >
                    {experience.type}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Building size={16} className="mr-1" />
                    <a
                      href={experience.companyUrl}
                      className="hover:text-primary-500 transition-colors group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {experience.company}
                      <ExternalLink
                        size={12}
                        className="inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    {experience.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {experience.duration}
                  </div>
                </div>

                {/* Projects Section */}
                {experience.projects.map((project, idx) => (
                  <div key={idx} className="mb-6 last:mb-0">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                        {project.name}
                      </h4>
                      {project.status && (
                        <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                          {project.status}
                        </span>
                      )}
                    </div>

                    <ul className="space-y-2 mb-4">
                      {project.description.map((item, descIdx) => (
                        <li key={descIdx} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Project Metrics */}
                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-4 mb-4 bg-white dark:bg-gray-800 p-4 rounded-lg">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-xl font-bold text-primary-600 dark:text-primary-400">
                              {value}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 
                                   text-gray-600 dark:text-gray-300 rounded-full text-sm
                                   hover:bg-primary-50 dark:hover:bg-primary-900/20 
                                   hover:text-primary-600 dark:hover:text-primary-400
                                   transition-colors cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Skills & Achievements */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Key Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-primary-50 dark:bg-primary-900/20 
                                     text-primary-600 dark:text-primary-400 rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, achIdx) => (
                          <li
                            key={achIdx}
                            className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                          >
                            <Award
                              size={12}
                              className="mr-2 text-primary-500"
                            />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <GraduationCap className="mr-2" size={24} />
          Education
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {edu.degree}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <div className="flex items-center">
                  <Building size={16} className="mr-1" />
                  {edu.institution}
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-1" />
                  {edu.location}
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  {edu.duration}
                </div>
              </div>

              <div className="mb-4">
                <div
                  className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/20 
                             text-green-600 dark:text-green-400 rounded-full text-sm"
                >
                  {edu.grade}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                    Key Courses
                  </h4>
                  <ul className="space-y-1">
                    {edu.courses.map((course, courseIdx) => (
                      <li
                        key={courseIdx}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                      >
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                    Academic Projects
                  </h4>
                  <ul className="space-y-1">
                    {edu.projects.map((project, projIdx) => (
                      <li
                        key={projIdx}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                      >
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

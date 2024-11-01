import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Briefcase,
  GraduationCap,
  Clock,
  Code,
  Laptop,
  Server,
  Database,
} from "lucide-react";

const OverviewDashboard = () => {
  const stats = [
    {
      label: "Total Projects",
      value: "6",
      icon: Briefcase,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      subtext: "2 Professional, 4 Personal",
    },
    {
      label: "Experience",
      value: "1 year",
      icon: Clock,
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      subtext: "Full-time Web Developer",
    },
    {
      label: "Tech Stack",
      value: "15+",
      icon: Code,
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      subtext: "Technologies & Tools",
    },
    {
      label: "Education",
      value: "B.Tech",
      icon: GraduationCap,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      subtext: "Computer Engineering",
    },
  ];

  // Updated technology data with categories and custom colors
  const techData = [
    { name: "Next.js", value: 90, category: "Frontend", fill: "#3B82F6" },
    { name: "React", value: 85, category: "Frontend", fill: "#60A5FA" },
    { name: "Node.js", value: 85, category: "Backend", fill: "#10B981" },
    { name: "Python", value: 80, category: "Backend", fill: "#34D399" },
    { name: "MongoDB", value: 75, category: "Database", fill: "#8B5CF6" },
    { name: "PostgreSQL", value: 70, category: "Database", fill: "#A78BFA" },
  ];

  const projectData = [
    { name: "Web Apps", value: 2, color: "#3B82F6" },
    { name: "E-commerce", value: 2, color: "#10B981" },
    { name: "SaaS", value: 2, color: "#6366F1" },
  ];

  const skillsBreakdown = [
    {
      category: "Frontend",
      icon: Laptop,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      skills: ["Next.js", "React", "Redux", "Tailwind CSS"],
      count: 4,
    },
    {
      category: "Backend",
      icon: Server,
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      skills: ["Node.js", "Python", "ASP.NET", "Django"],
      count: 4,
    },
    {
      category: "Database",
      icon: Database,
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      skills: ["MongoDB", "PostgreSQL", "SQL"],
      count: 3,
    },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="font-medium text-gray-900 dark:text-white">{label}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Proficiency: {payload[0].value}%
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {payload[0].payload.category}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm
                       hover:shadow-md transition-all duration-300
                       border border-gray-100 dark:border-gray-700 group"
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`p-3 rounded-xl ${stat.bgColor} ${stat.color}
                              group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                    {stat.value}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {stat.subtext}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Technology Expertise Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
            Technology Expertise
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={techData} barSize={36}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "currentColor", fontSize: 12 }}
                  axisLine={false}
                />
                <YAxis
                  tick={{ fill: "currentColor", fontSize: 12 }}
                  axisLine={false}
                  domain={[0, 100]}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {techData.map((entry, index) => (
                    <Cell key={index} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Project Distribution */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
            Project Distribution
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={projectData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={60}
                  >
                    {projectData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              {projectData.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {item.name} ({item.value})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skills Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillsBreakdown.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm
                       border border-gray-100 dark:border-gray-700
                       hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div
                  className={`p-2 rounded-lg ${category.bgColor} ${category.color}
                              group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {category.count} skills
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OverviewDashboard;

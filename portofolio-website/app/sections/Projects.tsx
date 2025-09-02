"use client";

import React from "react";
import { SiReact, SiNextdotjs, SiSpringboot, SiKotlin, SiGo, SiFlutter, SiFirebase, SiTailwindcss, SiExpress, SiPostgresql, SiChartdotjs } from "react-icons/si";

const projects = [
    {
        category: "Web App",
        type: "E-commerce",
        title: "PojokKamera",
        description: "An online marketplace for buying and selling cameras.",
        techStack: [
            { name: "React", icon: <SiReact className="inline w-4 h-4 mr-1" /> },
            { name: "Next.js", icon: <SiNextdotjs className="inline w-4 h-4 mr-1" /> },
            { name: "Spring Boot", icon: <SiSpringboot className="inline w-4 h-4 mr-1" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="inline w-4 h-4 mr-1" /> },
        ],
        image: "https://via.placeholder.com/300x180.png?text=PojokKamera",
    },
    {
        category: "Web App",
        type: "Finance",
        title: "Keuanganku",
        description: "Online financial management application to track expenses and income.",
        techStack: [
            { name: "React", icon: <SiReact className="inline w-4 h-4 mr-1" /> },
            { name: "Next.js", icon: <SiNextdotjs className="inline w-4 h-4 mr-1" /> },
            { name: "Spring Boot", icon: <SiSpringboot className="inline w-4 h-4 mr-1" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="inline w-4 h-4 mr-1" /> },
        ],
        image: "https://via.placeholder.com/300x180.png?text=Keuanganku",
    },
    {
        category: "Web App",
        type: "Portfolio",
        title: "Timedoor Website",
        description: "Dummy website still under development.",
        techStack: [
            { name: "React.js", icon: <SiReact className="inline w-4 h-4 mr-1" /> },
            { name: "Go Backend", icon: <SiGo className="inline w-4 h-4 mr-1" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="inline w-4 h-4 mr-1" /> },
        ],
        image: "https://via.placeholder.com/300x180.png?text=Timedoor+Website",
    },
    {
        category: "Mobile App",
        type: "Finance",
        title: "Keuanganku Mobile",
        description: "Mobile version of financial management app.",
        techStack: [
            { name: "Kotlin", icon: <SiKotlin className="inline w-4 h-4 mr-1" /> },
        ],
        image: "https://via.placeholder.com/300x180.png?text=Keuanganku+Mobile",
    },
    // Dummy projects tambahan
    {
        category: "Web App",
        type: "Dashboard",
        title: "DataInsight",
        description: "Interactive dashboard for visualizing business metrics and KPIs.",
        techStack: [
            { name: "React", icon: <SiReact className="inline w-4 h-4 mr-1" /> },
            { name: "Chart.js", icon: <SiChartdotjs className="inline w-4 h-4 mr-1" /> },
            { name: "Node.js", icon: <SiExpress className="inline w-4 h-4 mr-1" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="inline w-4 h-4 mr-1" /> },
        ],
        image: "https://via.placeholder.com/300x180.png?text=DataInsight",
    },
    {
        category: "Mobile App",
        type: "Social Media",
        title: "ChatterBox",
        description: "A social networking app designed for real-time messaging.",
        techStack: [
            { name: "Flutter", icon: <SiFlutter className="inline w-4 h-4 mr-1" /> },
            { name: "Firebase", icon: <SiFirebase className="inline w-4 h-4 mr-1" /> },
        ],
        image: "https://via.placeholder.com/300x180.png?text=ChatterBox",
    },
    {
        category: "Web App",
        type: "Admin Panel",
        title: "ManagePro",
        description: "Admin panel for managing users, roles, and permissions efficiently.",
        techStack: [
            { name: "React", icon: <SiReact className="inline w-4 h-4 mr-1" /> },
            { name: "TailwindCSS", icon: <SiTailwindcss className="inline w-4 h-4 mr-1" /> },
            { name: "Express.js", icon: <SiExpress className="inline w-4 h-4 mr-1" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="inline w-4 h-4 mr-1" /> },
        ],
        image: "https://via.placeholder.com/300x180.png?text=ManagePro",
    },
];

// Komponen ProjectCard
function ProjectCard({ project }: { project: typeof projects[0] }) {
    return (
        <div className="bg-white dark:bg-gray-700 rounded-2xl p-5 shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-transparent hover:border-blue-300 dark:hover:border-blue-500 overflow-hidden flex flex-col justify-between">
            <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-[10px] font-semibold text-blue-800 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/20 rounded-full px-2 py-0.5">
                        {project.category}
                    </span>
                    <span className="text-[10px] font-semibold text-blue-900 dark:text-blue-400 bg-blue-200 dark:bg-blue-900/30 rounded-full px-2 py-0.5">
                        {project.type}
                    </span>
                </div>

                {/* Project Image */}
                <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl mb-4 w-full h-44 object-cover shadow-sm hover:shadow-lg transition-shadow duration-300"
                />

                {/* Title */}
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 dark:text-gray-100 mb-1">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, idx) => (
                        <span
                            key={idx}
                            className="text-[10px] sm:text-xs font-semibold text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-600/30 rounded-full px-2 py-1 flex items-center"
                        >
                            {tech.icon} {tech.name}
                        </span>
                    ))}
                </div>
            </div>

            <button className="self-start inline-flex items-center bg-blue-800 text-white text-xs sm:text-sm font-semibold rounded-full px-4 py-2 hover:bg-blue-900 dark:hover:bg-blue-500 transition-all duration-300 shadow hover:shadow-lg transform hover:-translate-y-1">
                View Project
                <span className="ml-2 text-[10px] sm:text-xs">→</span>
            </button>

        </div>

    );
}

// Komponen utama
export default function ProjectsSection() {
    return (
        <section id="section-projects">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block border border-gray-900 dark:border-gray-100 rounded-full px-4 py-1 text-sm font-medium text-gray-900 dark:text-gray-100">
                        Projects
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
                        My <span className="text-blue-800 dark:text-blue-400">Development Work</span>
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                        Some of my recent projects including web and mobile applications
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <ProjectCard key={i} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
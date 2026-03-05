"use client";

import React, { useState } from "react";
import {
    SiReact,
    SiNextdotjs,
    SiSpringboot,
    SiKotlin,
    SiGo,
    SiFlutter,
    SiFirebase,
    SiTailwindcss,
    SiExpress,
    SiPostgresql,
    SiChartdotjs,
    SiNodedotjs,
    SiPython,
    SiFastapi,
    SiOpencv,
    SiMongodb,
} from "react-icons/si";
import { FiCpu, FiImage, FiMonitor, FiSmartphone } from "react-icons/fi";
import { motion } from "framer-motion";

type TechIconComponent = React.ComponentType<{ className?: string }>;

const techIcons: Record<string, TechIconComponent | null> = {
    React: SiReact,
    "Next.js": SiNextdotjs,
    "Spring Boot": SiSpringboot,
    PostgreSQL: SiPostgresql,
    "Go Backend": SiGo,
    Kotlin: SiKotlin,
    "Chart.js": SiChartdotjs,
    "Node.js": SiNodedotjs,
    Flutter: SiFlutter,
    Firebase: SiFirebase,
    TailwindCSS: SiTailwindcss,
    "Express.js": SiExpress,
    Python: SiPython,
    FastAPI: SiFastapi,
    YOLO: null,
    "Machine Learning": null,
    MongoDB: SiMongodb,
    OpenCV: SiOpencv,
};

const allProjects = [
    {
        category: "Web App",
        type: "E-commerce",
        title: "Pojok Kamera",
        description: "An online marketplace for buying and selling cameras.",
        techStack: ["React", "Next.js", "Spring Boot", "PostgreSQL"],
        image: "https://via.placeholder.com/600x400.png?text=PojokKamera",
    },
    {
        category: "Web App",
        type: "Finance",
        title: "Keuanganku",
        description: "Online financial management application to track expenses and income.",
        techStack: ["React", "Next.js", "Spring Boot", "PostgreSQL"],
        image: "https://via.placeholder.com/600x400.png?text=Keuanganku",
    },
    {
        category: "Mobile App",
        type: "Finance",
        title: "Keuanganku Mobile",
        description: "Mobile version of financial management app.",
        techStack: ["Kotlin"],
        image: "https://via.placeholder.com/600x400.png?text=Keuanganku+Mobile",
    },
    {
        category: "Web App",
        type: "Dashboard",
        title: "DataInsight",
        description: "Interactive dashboard for visualizing business metrics and KPIs.",
        techStack: ["React", "Chart.js", "Node.js", "PostgreSQL"],
        image: "https://via.placeholder.com/600x400.png?text=DataInsight",
    },
    {
        category: "Mobile App",
        type: "Social Media",
        title: "ChatterBox",
        description: "A social networking app designed for real-time messaging.",
        techStack: ["Flutter", "Firebase"],
        image: "https://via.placeholder.com/600x400.png?text=ChatterBox",
    },
    {
        category: "Web App",
        type: "Admin Panel",
        title: "ManagePro",
        description: "Admin panel for managing users, roles, and permissions efficiently.",
        techStack: ["React", "TailwindCSS", "Express.js", "PostgreSQL"],
        image: "https://via.placeholder.com/600x400.png?text=ManagePro",
    },
    {
        category: "AI / ML",
        type: "Vehicle Security",
        title: "AI-Powered Vehicle Theft Detection System",
        description: "System to detect vehicle theft in real-time using AI and YOLO.",
        techStack: ["Python", "FastAPI", "YOLO", "Machine Learning"],
        image: "https://via.placeholder.com/600x400.png?text=Vehicle+Theft+Detection",
    },
    {
        category: "Web App",
        type: "E-commerce",
        title: "Eleganza",
        description: "Full-Stack Fashion E-Commerce Website using MERN stack.",
        techStack: ["MongoDB", "Express.js", "React", "Node.js"],
        image: "https://via.placeholder.com/600x400.png?text=Eleganza",
    },
    {
        category: "AI / ML",
        type: "Driver Safety",
        title: "AI-Powered Drowsiness Detection",
        description: "Detect driver drowsiness in real-time using YOLO and OpenCV.",
        techStack: ["Python", "OpenCV", "YOLO", "Machine Learning"],
        image: "https://via.placeholder.com/600x400.png?text=Drowsiness+Detection",
    },
];

function ProjectCard({ project, index }: { project: typeof allProjects[0], index: number }) {
    const [hasImage, setHasImage] = useState(Boolean(project.image));
    const DefaultIcon =
        project.category === "Mobile App"
            ? FiSmartphone
            : project.category === "AI / ML"
                ? FiCpu
                : project.category === "Web App"
                    ? FiMonitor
                    : FiImage;

    return (
        <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 380,
                damping: 30,
            }}
            className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col h-full group"
        >
            <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
                {hasImage ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                        onError={() => setHasImage(false)}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
                        <div className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400">
                            <DefaultIcon className="w-10 h-10" />
                            <span className="text-xs font-medium">No preview</span>
                        </div>
                    </div>
                )}
            </div>

            <div className="p-6 flex flex-col flex-grow relative">
                <div className="absolute -inset-2 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.35),transparent_60%)] opacity-0 group-hover:opacity-100 blur-xl -z-10 pointer-events-none"></div>
                <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2.5 py-1 rounded-full border border-blue-100 dark:border-blue-800">
                        {project.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        {project.type}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-800 mt-auto">
                    {project.techStack.map((techName, idx) => {
                        const IconComponent = techIcons[techName];
                        return (
                            <div
                                key={idx}
                                className="flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-2.5 py-1.5 rounded-md border border-gray-200 dark:border-gray-700"
                            >
                                {IconComponent && <IconComponent className="w-3.5 h-3.5" />}
                                {techName}
                            </div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
}

export default function ProjectsSection() {
    return (
        <section id="section-projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                <div className="text-center mb-16 space-y-4">
                    <motion.div
                        initial={{ y: 20 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4 border border-blue-200 dark:border-blue-800">
                            Portfolio
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg mt-4">
                            A collection of applications I&apos;ve built, demonstrating my full-stack capabilities.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allProjects.map((project, i) => (
                        <ProjectCard key={i} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

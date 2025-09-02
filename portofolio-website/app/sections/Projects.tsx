"use client";

import React from "react";
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

// Variabel global untuk mengatur apakah gambar ditampilkan
const showImage = false;

// --- DATA STRUCTURE IMPROVEMENT ---
// 1. Ikon dipisahkan dari data untuk memisahkan 'data' dan 'tampilan'.
// Ini membuatnya lebih mudah untuk dikelola.
const techIcons: any = {
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
    YOLO: null, // Contoh teknologi tanpa ikon
    "Machine Learning": null, // Contoh teknologi tanpa ikon
    MongoDB: SiMongodb,
    OpenCV: SiOpencv,
};

// 2. Semua proyek digabungkan menjadi satu array tunggal untuk kesederhanaan.
// `techStack` sekarang hanya berupa array string.
const allProjects = [
    {
        category: "Web App",
        type: "E-commerce",
        title: "Pojok Kamera",
        description: "An online marketplace for buying and selling cameras.",
        techStack: ["React", "Next.js", "Spring Boot", "PostgreSQL"],
        image: "https://via.placeholder.com/300x180.png?text=PojokKamera",
    },
    {
        category: "Web App",
        type: "Finance",
        title: "Keuanganku",
        description: "Online financial management application to track expenses and income.",
        techStack: ["React", "Next.js", "Spring Boot", "PostgreSQL"],
        image: "https://via.placeholder.com/300x180.png?text=Keuanganku",
    },
    // {
    //     category: "Web App",
    //     type: "Portfolio",
    //     title: "Timedoor Website",
    //     description: "Dummy website still under development.",
    //     techStack: ["React", "Go Backend", "PostgreSQL"],
    //     image: "https://via.placeholder.com/300x180.png?text=Timedoor+Website",
    // },
    {
        category: "Mobile App",
        type: "Finance",
        title: "Keuanganku Mobile",
        description: "Mobile version of financial management app.",
        techStack: ["Kotlin"],
        image: "https://via.placeholder.com/300x180.png?text=Keuanganku+Mobile",
    },
    {
        category: "Web App",
        type: "Dashboard",
        title: "DataInsight",
        description: "Interactive dashboard for visualizing business metrics and KPIs.",
        techStack: ["React", "Chart.js", "Node.js", "PostgreSQL"],
        image: "https://via.placeholder.com/300x180.png?text=DataInsight",
    },
    {
        category: "Mobile App",
        type: "Social Media",
        title: "ChatterBox",
        description: "A social networking app designed for real-time messaging.",
        techStack: ["Flutter", "Firebase"],
        image: "https://via.placeholder.com/300x180.png?text=ChatterBox",
    },
    {
        category: "Web App",
        type: "Admin Panel",
        title: "ManagePro",
        description: "Admin panel for managing users, roles, and permissions efficiently.",
        techStack: ["React", "TailwindCSS", "Express.js", "PostgreSQL"],
        image: "https://via.placeholder.com/300x180.png?text=ManagePro",
    },
    {
        category: "AI / ML",
        type: "Vehicle Security",
        title: "AI-Powered Vehicle Theft Detection System",
        description: "System to detect vehicle theft in real-time using AI and YOLO.",
        techStack: ["Python", "FastAPI", "YOLO", "Machine Learning"],
        image: "https://via.placeholder.com/300x180.png?text=Vehicle+Theft+Detection",
    },
    {
        category: "Web App",
        type: "E-commerce",
        title: "Eleganza",
        description: "Full-Stack Fashion E-Commerce Website using MERN stack.",
        techStack: ["MongoDB", "Express.js", "React", "Node.js"],
        image: "https://via.placeholder.com/300x180.png?text=Eleganza",
    },
    {
        category: "AI / ML",
        type: "Driver Safety",
        title: "AI-Powered Drowsiness Detection for Drivers",
        description: "Detect driver drowsiness in real-time using YOLO and OpenCV.",
        techStack: ["Python", "OpenCV", "YOLO", "Machine Learning"],
        image: "https://via.placeholder.com/300x180.png?text=Drowsiness+Detection",
    },
];

// --- CARD DESIGN IMPROVEMENT ---
// Komponen ProjectCard yang diperbarui
function ProjectCard({ project }: { project: typeof allProjects[0] }) {
    return (
        // Menambahkan `h-full` agar kartu mengisi tinggi sel grid
        // Menambahkan `flex-grow` pada div konten utama agar mendorong tombol ke bawah
        <div className="bg-white dark:bg-gray-700 rounded-2xl p-5 shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-transparent hover:border-blue-300 dark:hover:border-blue-500 overflow-hidden flex flex-col h-full">
            {/* Konten akan tumbuh untuk mengisi ruang yang tersedia */}
            <div className="flex-grow">
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
                {showImage && (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="rounded-xl mb-4 w-full h-44 object-cover shadow-sm hover:shadow-lg transition-shadow duration-300"
                    />
                )}

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
                    {project.techStack.map((techName, idx) => {
                        const IconComponent = techIcons[techName];
                        return (
                            <span
                                key={idx}
                                className="text-[10px] sm:text-xs font-semibold text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-600/30 rounded-full px-2 py-1 flex items-center"
                            >
                                {IconComponent && <IconComponent className="inline w-4 h-4 mr-1" />}
                                {techName}
                            </span>
                        );
                    })}
                </div>
            </div>

            {/* Tombol akan selalu berada di bagian bawah */}
            <div className="mt-auto">
                <button className="inline-flex items-center bg-blue-800 text-white text-xs sm:text-sm font-semibold rounded-full px-4 py-2 hover:bg-blue-900 dark:hover:bg-blue-500 transition-all duration-300 shadow hover:shadow-lg transform hover:-translate-y-1">
                    View Project
                    <span className="ml-2 text-[10px] sm:text-xs">→</span>
                </button>
            </div>
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
                    {allProjects.slice().reverse().map((project, i) => (
                        <div key={i} data-aos="fade-up">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
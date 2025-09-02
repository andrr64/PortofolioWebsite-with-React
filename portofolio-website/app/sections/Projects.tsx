"use client";

import React from "react";

export default function ProjectsSection() {
    const projects = [
        {
            category: "Web App",
            type: "Dashboard",
            title: "Cashify",
            description: "A modern financial dashboard app to track expenses and income efficiently.",
            image: "https://via.placeholder.com/300x180.png?text=Cashify",
        },
        {
            category: "Mobile App",
            type: "E-commerce",
            title: "ShopMate",
            description: "An intuitive shopping app for Android and iOS with seamless checkout experience.",
            image: "https://via.placeholder.com/300x180.png?text=ShopMate",
        },
        {
            category: "Web App",
            type: "Portfolio",
            title: "DevPortfolio",
            description: "A personal developer portfolio website to showcase projects and skills.",
            image: "https://via.placeholder.com/300x180.png?text=DevPortfolio",
        },
        {
            category: "Web App",
            type: "Analytics",
            title: "DataViz Pro",
            description: "Interactive web dashboards for visualizing business metrics and KPIs.",
            image: "https://via.placeholder.com/300x180.png?text=DataViz+Pro",
        },
        {
            category: "Mobile App",
            type: "Social Media",
            title: "Chatter",
            description: "A social networking app designed for connecting people through messaging.",
            image: "https://via.placeholder.com/300x180.png?text=Chatter",
        },
        {
            category: "Web App",
            type: "Admin Panel",
            title: "ManageIt",
            description: "A full-featured admin panel for managing users, roles, and permissions.",
            image: "https://via.placeholder.com/300x180.png?text=ManageIt",
        },
    ];

    return (
        <section className="bg-gray-50 dark:bg-gray-800 py-16 transition-colors duration-500">
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
                        Some of my recent projects from web and mobile development
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="bg-white dark:bg-gray-700 rounded-2xl p-5 shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-transparent hover:border-blue-300 dark:hover:border-blue-500 overflow-hidden"
                        >
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
                            <h3 className="font-extrabold text-lg sm:text-xl text-gray-900 dark:text-gray-100 mb-1">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Button */}
                            <button className="inline-flex items-center bg-blue-800 dark:bg-blue-600 text-white text-xs sm:text-sm font-semibold rounded-full px-4 py-2 hover:bg-blue-900 dark:hover:bg-blue-500 transition-all duration-300 shadow hover:shadow-lg transform hover:-translate-y-1">
                                View Project
                                <span className="ml-2 text-[10px] sm:text-xs">→</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

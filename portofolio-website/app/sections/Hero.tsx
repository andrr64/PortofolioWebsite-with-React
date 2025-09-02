"use client";

import React from "react";
import { SiNextdotjs, SiSpring, SiLaravel, SiPostgresql } from "react-icons/si";
import { FaAndroid } from "react-icons/fa";

const techSkills = [
    { name: "Android (Kotlin)", icon: <FaAndroid size={22} className="text-green-500" /> },
    { name: "Next.js", icon: <SiNextdotjs size={22} className="text-black dark:text-white" /> },
    { name: "Spring Boot", icon: <SiSpring size={22} className="text-green-600" /> },
    { name: "Laravel", icon: <SiLaravel size={22} className="text-red-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={22} className="text-blue-500" /> },
];

export default function HeroSection() {
    return (
        <section id="section-hero" className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center font-normal transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

                {/* LEFT SECTION */}
                <div className="flex-1 max-w-xl lg:max-w-2xl space-y-6 text-center md:text-left">
                    <div className="space-y-3">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
                            Hi, I'm <span className="text-blue-800 dark:text-blue-400">Andreas.</span>
                        </h1>

                        <p className="text-2xl sm:text-3xl font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">
                            A passionate Full-Stack Developer.
                        </p>
                    </div>

                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg transition-colors duration-300">
                        Specialized in crafting high-performance Android apps and scalable backend systems.
                        I focus on clean architecture, seamless UI/UX, and optimized database design.
                    </p>

                    {/* Tech Skills */}
                    <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                        {techSkills.map((skill, idx) => (
                            <div
                                key={skill.name}
                                className="flex items-center gap-3 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full shadow-sm transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
                                style={{ transitionDelay: `${idx * 100}ms` }}
                            >
                                {skill.icon}
                                <span className="font-semibold text-gray-700 dark:text-gray-100 text-sm">{skill.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <button className="bg-blue-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            View Projects
                        </button>
                        <button className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                            My Experience
                        </button>
                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div className="flex-1 w-full hidden md:flex justify-center md:justify-end">
                    <img
                        src="https://media.istockphoto.com/id/1204374053/photo/profile-side-view-portrait-of-his-he-nice-attractive-skilled-focused-serious-guy-writing.jpg?s=612x612&w=0&k=20&c=ohF7qYstx9E6eJXpcQUtxFJCx9jjRBHilXcFehoOGyU="
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-2xl transition-transform transform hover:scale-105 duration-500"
                        alt="Developer portrait"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}

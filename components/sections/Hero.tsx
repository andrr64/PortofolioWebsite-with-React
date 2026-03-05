"use client";

import React from "react";
import { SiNextdotjs, SiSpring, SiLaravel, SiPostgresql } from "react-icons/si";
import { FaAndroid } from "react-icons/fa";
import { motion } from "framer-motion";
import CodingIconBackground from "../ui/CodingIconBackground";

const techSkills = [
    { name: "Android (Kotlin)", icon: <FaAndroid size={22} className="text-green-500" /> },
    { name: "Next.js", icon: <SiNextdotjs size={22} className="text-black dark:text-white" /> },
    { name: "Spring Boot", icon: <SiSpring size={22} className="text-green-600" /> },
    { name: "Laravel", icon: <SiLaravel size={22} className="text-red-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={22} className="text-blue-500" /> },
];

const skillsContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.06,
        },
    },
};

const skillItem = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function HeroSection() {
    const scrollToSection = (selector: string) => {
        const target = document.querySelector(selector);
        if (target) {
            window.scrollTo({
                top: (target as HTMLElement).offsetTop - 100,
                behavior: "smooth",
            });
        }
    };

    return (
        <section
            id="section-hero"
            className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden"
        >
            <CodingIconBackground className="mix-blend-multiply dark:mix-blend-screen" />
            {/* Background blobs */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 flex flex-col-reverse md:flex-row items-center justify-between gap-12 z-10">

                {/* LEFT SECTION */}
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 max-w-xl lg:max-w-2xl space-y-8 text-center md:text-left"
                >
                    <div className="space-y-4">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4 border border-blue-200 dark:border-blue-800">
                            Available for new projects
                        </span>
                        
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                            Hi, I&apos;m <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                                Andreas.
                            </span>
                        </h1>

                        <p className="text-2xl sm:text-3xl font-medium text-gray-700 dark:text-gray-300">
                            Computer Engineer who builds anything
                        </p>
                    </div>

                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                        I design and ship end-to-end products, from clean UI/UX to scalable systems and solid data layers.
                        If it runs on a screen (or a server), I can build it.
                    </p>

                    {/* Tech Skills */}
                    <motion.div
                        variants={skillsContainer}
                        initial="hidden"
                        animate="show"
                        className="flex flex-wrap justify-center md:justify-start gap-3"
                    >
                        {techSkills.map((skill) => (
                            <motion.div
                                key={skill.name}
                                variants={skillItem}
                                whileHover={{ y: -2, scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 420, damping: 26 }}
                                className="flex items-center gap-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-full shadow-sm"
                            >
                                {skill.icon}
                                <span className="font-medium text-gray-700 dark:text-gray-200 text-sm">{skill.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                        <motion.button
                            onClick={() => scrollToSection("#section-projects")}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 420, damping: 26 }}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-semibold transition-colors duration-300"
                        >
                            View Projects
                        </motion.button>
                        <motion.button
                            onClick={() => scrollToSection("#section-experience")}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 420, damping: 26 }}
                            className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 px-8 py-3.5 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                        >
                            My Experience
                        </motion.button>
                    </div>
                </motion.div>

                {/* RIGHT SECTION */}
                <div 
                    className="flex-1 w-full hidden md:flex justify-center md:justify-end relative"
                >
                    <div className="relative w-full max-w-md aspect-square">
                        <motion.img
                            initial={{ y: 18, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                            whileHover={{ y: -6, rotate: -0.6, scale: 1.01 }}
                            src="https://media.istockphoto.com/id/1204374053/photo/profile-side-view-portrait-of-his-he-nice-attractive-skilled-focused-serious-guy-writing.jpg?s=612x612&w=0&k=20&c=ohF7qYstx9E6eJXpcQUtxFJCx9jjRBHilXcFehoOGyU="
                            className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl border-4 border-white dark:border-gray-800"
                            alt="Developer portrait"
                            loading="eager"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

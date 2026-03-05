"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import blackLogo from "@/public/logo-black.svg";
import whiteLogo from "@/public/logo-white.svg";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
    { menu: "Home", link: "#", absoluteLink: "/" },
    { menu: "Experiences", link: "#section-experience", absoluteLink: "/#section-experience" },
    { menu: "Projects", link: "#section-projects", absoluteLink: "/#section-projects" },
    { menu: "Achievements", link: "#section-achievements", absoluteLink: "/#section-achievements" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMenuClick = (item: { menu: string; link: string; absoluteLink: string }) => {
        if (window.location.pathname === "/") {
            if (item.link === "#") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                const target = document.querySelector(item.link);
                if (target) {
                    window.scrollTo({
                        top: (target as HTMLElement).offsetTop - 100,
                        behavior: "smooth",
                    });
                }
            }
        } else {
            window.location.href = item.absoluteLink;
        }
        setIsOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled 
                ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-gray-800/50" 
                : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
                        {mounted && (
                            <Image
                                src={resolvedTheme === "dark" ? whiteLogo : blackLogo}
                                alt="Logo"
                                width={40}
                                height={40}
                                className="transition-transform duration-300 group-hover:scale-110"
                            />
                        )}
                        <span className="font-bold text-xl tracking-tight hidden sm:block">Andreas</span>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <button
                                key={item.menu}
                                onClick={() => handleMenuClick(item)}
                                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
                            >
                                {item.menu}
                                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                            </button>
                        ))}
                    </nav>

                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                        {mounted && (
                            <button
                                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Toggle theme"
                            >
                                {resolvedTheme === "dark" ? (
                                    <FiSun className="w-5 h-5 text-yellow-400" />
                                ) : (
                                    <FiMoon className="w-5 h-5 text-gray-600" />
                                )}
                            </button>
                        )}

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {menuItems.map((item) => (
                                <button
                                    key={item.menu}
                                    onClick={() => handleMenuClick(item)}
                                    className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                >
                                    {item.menu}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

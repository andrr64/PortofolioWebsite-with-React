"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

// Menu sebagai array of objects { menu, link }
const menuItems = [
    { menu: "Home", link: "#" },
    { menu: "About", link: "#about" },
    { menu: "Services", link: "#services" },
    { menu: "Portfolio", link: "#portfolio" },
    { menu: "Contact", link: "#contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 transition-colors duration-300">
            <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
                {/* Logo */}
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl sm:text-3xl font-extrabold font-sans dark:text-white tracking-wide">
                        Andreas
                    </span>
                </a>

                {/* Menu */}
                <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
                    <ul className="font-medium flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 border md:border-0 rounded-lg bg-gray-50 dark:bg-gray-900 border-gray-100 dark:border-gray-700">
                        {menuItems.map((item) => (
                            <li key={item.menu}>
                                <a
                                    href={item.link}
                                    className="relative text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 group"
                                >
                                    {item.menu}
                                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Hamburger + Theme Toggle */}
                <div className="flex items-center space-x-3 md:space-x-4">
                    {/* Hamburger Mobile */}
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center justify-center p-2 w-10 h-10 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                        {isOpen ? <span className="text-2xl">✖</span> : (
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        )}
                    </button>

                    {/* Theme Toggle */}
                    {mounted && (
                        <button
                            onClick={() =>
                                setTheme(resolvedTheme === "dark" ? "light" : "dark")
                            }
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                        >
                            {resolvedTheme === "dark" ? (
                                <FiSun className="w-5 h-5 text-yellow-400" />
                            ) : (
                                <FiMoon className="w-5 h-5 text-gray-800" />
                            )}
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
}

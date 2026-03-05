"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

const socialLinks = [
    { icon: <FaGithub />, link: "#", label: "GitHub" },
    { icon: <FaLinkedinIn />, link: "#", label: "LinkedIn" },
    { icon: <FaInstagram />, link: "#", label: "Instagram" },
    { icon: <FaTwitter />, link: "#", label: "Twitter" },
];

export default function Footer() {
    return (
        <footer className="border-t border-gray-200/70 dark:border-gray-800/70 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    
                    {/* Left Side: Logo & Copyright */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                        <Link href="/" className="flex items-center gap-2 group">
                            <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">Andreas</span>
                        </Link>
                        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
                            Computer engineer building end-to-end products with modern technologies.
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                            &copy; {new Date().getFullYear()} Andreas. All rights reserved.
                        </p>
                    </div>

                    {/* Right Side: Socials & Back to Top */}
                    <div className="flex flex-col items-center md:items-end space-y-6">
                        <div className="flex gap-4">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.link}
                                    aria-label={social.label}
                                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                                >
                                    <span className="text-xl">{social.icon}</span>
                                </a>
                            ))}
                        </div>

                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                        >
                            <span>Back to top</span>
                            <FiArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

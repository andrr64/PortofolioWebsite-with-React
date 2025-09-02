"use client";

import React from "react";

// Data menu
const exploreLinks = [
    { menu: "Projects", link: "#" },
    { menu: "Skills", link: "#" },
    { menu: "Experience", link: "#" },
    { menu: "Contact", link: "#" },
];

const legalLinks = [
    { menu: "Privacy Policy", link: "#" },
    { menu: "Terms of Service", link: "#" },
    { menu: "Disclaimer", link: "#" },
];

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 transition-colors duration-300">
            <div className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-0">

                {/* Logo & Deskripsi */}
                <div className="md:flex-1 max-w-xs">
                    <div className="flex items-center gap-2 mb-6">
                        <img
                            alt="Andreas logo"
                            className="w-7 h-7"
                            src="https://cdn-icons-png.flaticon.com/512/1903/1903162.png"
                        />
                        <span className="text-lg font-bold tracking-wide text-white">
                            Andreas
                        </span>
                    </div>
                    <p className="text-sm leading-relaxed mb-8 text-gray-400">
                        Passionate Full-Stack Developer building modern web & mobile apps.
                        Explore projects, learn about my work, and connect with me.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-6 text-lg mb-10">
                        <a aria-label="Twitter" className="hover:text-blue-500 transition-colors" href="#"><i className="fab fa-x-twitter"></i></a>
                        <a aria-label="LinkedIn" className="hover:text-blue-500 transition-colors" href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a aria-label="Instagram" className="hover:text-pink-500 transition-colors" href="#"><i className="fab fa-instagram"></i></a>
                        <a aria-label="GitHub" className="hover:text-white transition-colors" href="#"><i className="fab fa-github"></i></a>
                    </div>

                    {/* Back to Top Button */}
                    <button
                        className="flex items-center gap-2 border border-gray-600 px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded hover:bg-gray-700 hover:text-white transition-all"
                        type="button"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        <i className="fas fa-arrow-up"></i>
                        BACK TO TOP
                    </button>
                </div>

                {/* Links */}
                <div className="flex flex-col md:flex-row gap-16 md:gap-24 text-sm leading-relaxed">
                    <div>
                        <h3 className="font-semibold mb-4 text-white">Explore</h3>
                        <ul className="space-y-2">
                            {exploreLinks.map((item, idx) => (
                                <li key={idx}>
                                    <a
                                        className="hover:text-blue-500 transition-colors"
                                        href={item.link}
                                    >
                                        {item.menu}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4 text-white">Legal</h3>
                        <ul className="space-y-2">
                            {legalLinks.map((item, idx) => (
                                <li key={idx}>
                                    <a
                                        className="hover:text-blue-500 transition-colors"
                                        href={item.link}
                                    >
                                        {item.menu}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

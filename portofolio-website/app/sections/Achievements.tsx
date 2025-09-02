"use client";

import React from "react";
import { SiGoogle, SiInternetcomputer, SiPython } from "react-icons/si";
import { FiArrowUpRight, FiAward } from "react-icons/fi"; // Icons for CTA and fallback

// --- DATA STRUCTURE IMPROVEMENT ---
// Menambahkan 'issuer' untuk menampilkan logo dan memperkuat kredibilitas.
export const certificationsData = [
    {
        issuer: "Google",
        title: "Advanced Data Analytics Specialization",
        url: "https://www.coursera.org/account/accomplishments/specialization/LYUEATRP4UQ3",
        description: "Advanced data analytics techniques including data visualization, SQL, and statistical analysis.",
        tech: ["Data Analysis", "SQL", "Data Visualization", "Statistics"],
    },
    {
        issuer: "IBM",
        title: "Data Science Specialization",
        url: "https://coursera.org/verify/professional-cert/3RZTHFPNV4KF",
        description: "End-to-end data science skills including Python, machine learning, and data visualization.",
        tech: ["Python", "Machine Learning", "Data Visualization", "Pandas", "NumPy"],
    },
    {
        issuer: "OpenEDG",
        title: "PCAP: Programming Essentials in Python",
        url: "https://drive.google.com/file/d/1Wh2VygOaYtfCOjQhBQcGAxZX243Hv4TV/view?usp=sharing",
        description: "Fundamental Python programming concepts, OOP, data structures, and file handling.",
        tech: ["Python", "OOP", "Data Structures"],
    },
    {
        issuer: "Google",
        title: "IT Support Specialization",
        url: "https://www.coursera.org/account/accomplishments/specialization/8HJXC3NRQ4JY",
        description: "Comprehensive IT support skills, including networking, system administration, and troubleshooting.",
        tech: ["Networking", "System Admin", "Troubleshooting"],
    },
    {
        issuer: "IBM",
        title: "Data Analytics with Excel and R Specialization",
        url: "https://coursera.org/verify/professional-cert/L8FV5XLFQH3X",
        description: "Data analytics using Excel and R for statistical analysis and reporting.",
        tech: ["Excel", "R", "Data Analysis", "Visualization"],
    },
];

// Objek untuk memetakan nama issuer ke komponen ikon
const issuerLogos: any = {
    Google: <SiGoogle className="h-6 w-6 text-gray-500 dark:text-gray-400" />,
    IBM: <SiInternetcomputer className="h-6 w-6 text-gray-500 dark:text-gray-400" />,
    OpenEDG: <SiPython className="h-6 w-6 text-gray-500 dark:text-gray-400" />,
    Default: <FiAward className="h-6 w-6 text-gray-500 dark:text-gray-400" />, // Fallback icon
};

// --- COMPONENT IMPROVEMENT ---
function AchievementCard({ cert }: { cert: typeof certificationsData[0] }) {
    const IssuerIcon = issuerLogos[cert.issuer] || issuerLogos.Default;

    return (
        <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View credential for ${cert.title} (opens in a new tab)`}
            className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300 border border-transparent hover:border-blue-300 dark:hover:border-blue-500 flex flex-col h-full cursor-pointer"
        >
            {/* Konten utama kartu */}
            <div className="flex-grow">
                {/* Header Kartu dengan Logo & Nama Issuer */}
                <div className="flex items-center gap-3 mb-4">
                    {IssuerIcon}
                    <span className="font-semibold text-gray-600 dark:text-gray-300">{cert.issuer}</span>
                </div>

                {/* Judul Sertifikasi */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
                    {cert.title}
                </h3>
                {/* Deskripsi */}
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                    {cert.description}
                </p>

                {/* Tech / Skills */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {cert.tech.map((tech, tIdx) => (
                        <span
                            key={tIdx}
                            className="text-[10px] sm:text-xs font-semibold text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-600/30 rounded-full px-2 py-1"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Footer Kartu (CTA) */}
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
                <span className="flex items-center text-blue-700 dark:text-blue-400 font-semibold text-sm sm:text-base">
                    View Credential
                    <FiArrowUpRight className="ml-1 h-4 w-4" />
                    <span className="sr-only">(opens in a new tab)</span>
                </span>
            </div>
        </a>
    );
}

// Komponen utama
export default function CertificationsSection() {
    return (
        <section id="section-achievements" className="flex flex-col justify-center mt-16">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block border border-gray-900 dark:border-gray-100 rounded-full px-4 py-1 text-sm font-medium text-gray-900 dark:text-gray-100">
                        Certifications
                    </span>
                    <h1 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight text-gray-900 dark:text-gray-100">
                        Professional <span className="text-blue-800 dark:text-blue-400">Achievements</span>
                    </h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                        Some of the certifications I have earned to enhance my skills and knowledge.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificationsData.map((cert, idx) => (
                        <div key={idx} data-aos="fade-up">
                            <AchievementCard cert={cert} />
                        </div>
                    ))}
                </div>
            </main>
        </section>
    );
}
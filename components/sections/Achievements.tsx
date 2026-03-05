"use client";

import React from "react";
import { SiGoogle, SiInternetcomputer, SiPython } from "react-icons/si";
import { FiAward } from "react-icons/fi";
import { motion } from "framer-motion";

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

const issuerLogos: Record<string, React.ReactNode> = {
    Google: <SiGoogle className="h-6 w-6 text-gray-500 dark:text-gray-400 group-hover:text-blue-500 transition-colors" />,
    IBM: <SiInternetcomputer className="h-6 w-6 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 transition-colors" />,
    OpenEDG: <SiPython className="h-6 w-6 text-gray-500 dark:text-gray-400 group-hover:text-yellow-500 transition-colors" />,
    Default: <FiAward className="h-6 w-6 text-gray-500 dark:text-gray-400" />,
};

function AchievementCard({ cert, index }: { cert: typeof certificationsData[0], index: number }) {
    const IssuerIcon = issuerLogos[cert.issuer] || issuerLogos.Default;

    return (
        <motion.a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col h-full relative overflow-hidden group"
        >
            <div className="flex-grow relative">
                <div className="absolute -inset-2 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.35),transparent_60%)] opacity-0 group-hover:opacity-100 blur-xl -z-10 pointer-events-none"></div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        {IssuerIcon}
                    </div>
                    <span className="font-semibold text-sm text-gray-600 dark:text-gray-300">{cert.issuer}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">
                    {cert.title}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {cert.tech.map((tech, tIdx) => (
                        <span
                            key={tIdx}
                            className="text-[10px] font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700/50 px-2 py-1 rounded-md"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.a>
    );
}

export default function CertificatesSection() {
    return (
        <section id="section-achievements" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                <div className="text-center mb-16 space-y-4">
                    <motion.div
                        initial={{ y: 20 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4 border border-blue-200 dark:border-blue-800">
                            Certifications
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                            Professional <span className="text-blue-600 dark:text-blue-400">Achievements</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg mt-4">
                            Credentials and certifications that validate my expertise.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificationsData.map((cert, idx) => (
                        <AchievementCard key={idx} cert={cert} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}

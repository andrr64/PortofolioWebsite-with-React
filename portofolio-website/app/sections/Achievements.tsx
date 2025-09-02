"use client";

import React from "react";

// Data Sertifikat
const certificates = [
    {
        issuer: "Coursera",
        title: "Machine Learning by Andrew Ng",
        description: "A comprehensive course covering supervised and unsupervised learning algorithms.",
        credentialLink: "https://www.coursera.org/account/accomplishments/certificate/ML1234",
    },
    {
        issuer: "Udemy",
        title: "React - The Complete Guide",
        description: "In-depth React course with Hooks, Redux, and real-world project applications.",
        credentialLink: "https://www.udemy.com/certificate/UC-REACT123",
    },
    {
        issuer: "Google",
        title: "Google Analytics Individual Qualification",
        description: "Certification on Google Analytics demonstrating proficiency in tracking and analyzing web data.",
        credentialLink: "https://skillshop.exceedlms.com/student/award/GAIQ5678",
    },
    {
        issuer: "Microsoft",
        title: "Azure Fundamentals",
        description: "Introductory certification on Microsoft Azure cloud services and fundamentals.",
        credentialLink: "https://www.microsoft.com/en-us/learn/certifications/azure-fundamentals",
    },
];

// Komponen CertificateCard
function CertificateCard({ certificate }: { certificate: typeof certificates[0] }) {
    return (
        <div className="bg-white dark:bg-gray-700 rounded-2xl p-5 shadow-md hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-blue-300 dark:hover:border-blue-500 flex flex-col justify-between">
            <div>
                {/* Issuer */}
                <span className="text-[10px] font-semibold text-blue-800 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/20 rounded-full px-2 py-0.5 mb-2 inline-block">
                    {certificate.issuer}
                </span>

                {/* Title */}
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 dark:text-gray-100 mb-2">
                    {certificate.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                    {certificate.description}
                </p>
            </div>

            {/* Credential Link Button */}
            <a
                href={certificate.credentialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start inline-flex items-center bg-blue-800 text-white text-xs sm:text-sm font-semibold rounded-full px-4 py-2 hover:bg-blue-900 dark:hover:bg-blue-500 transition-all duration-300 shadow hover:shadow-lg transform hover:-translate-y-1"
            >
                View Credential
                <span className="ml-2 text-[10px] sm:text-xs">→</span>
            </a>
        </div>
    );
}

// Komponen utama CertificatesSection
export default function CertificatesSection() {
    return (
        <section id="section-certificates">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block border border-gray-900 dark:border-gray-100 rounded-full px-4 py-1 text-sm font-medium text-gray-900 dark:text-gray-100">
                        Certificates
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
                        My <span className="text-blue-800 dark:text-blue-400">Achievements</span>
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                        Some of the certifications and credentials I have earned.
                    </p>
                </div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {certificates.map((cert, i) => (
                        <CertificateCard key={i} certificate={cert} />
                    ))}
                </div>
            </div>
        </section>
    );
}

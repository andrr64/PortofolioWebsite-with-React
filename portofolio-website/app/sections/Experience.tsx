"use client";

import React from "react";

// Data experience dipisahkan
export const experiencesData = [
  {
    role: "Programming Teacher",
    company: "Timedoor Academy",
    description:
      "Teaching programming concepts and guiding students through hands-on projects in web and mobile development.",
    period: "2023 - Now",
  },
  {
    role: "Software Engineer Intern",
    company: "Timedoor Academy",
    description:
      "Worked on developing internal tools and contributing to software projects under supervision.",
    period: "2025",
  },
];

export default function ExperienceSection() {
  return (
    <section id="section-experience" className="flex flex-col justify-center">
      <main className="max-w-6xl mx-auto px-6 sm:px-10 w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block border border-gray-900 dark:border-gray-100 rounded-full px-4 py-1 text-sm font-medium text-gray-900 dark:text-gray-100">
            Experience
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight text-gray-900 dark:text-gray-100">
            A Snapshot of My <span className="text-blue-800 dark:text-blue-400">Creative Growth</span>
          </h1>
        </div>

        {/* Timeline / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiencesData.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {exp.role} at {exp.company}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                  {exp.description}
                </p>
              </div>
              <div className="mt-4 text-blue-700 dark:text-blue-400 font-semibold text-sm sm:text-base">
                {exp.period}
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}

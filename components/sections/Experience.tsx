"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const experiencesData = [
  {
    role: "Programming Teacher",
    company: "Timedoor Academy",
    description:
      "Teaching programming concepts and guiding students through hands-on projects in web and mobile development.",
    period: "2023 - Now",
    startYear: 2023,
    highlights: [
      "Led multiple classes and guided students to complete real projects",
      "Improved lesson flow and student engagement with structured materials",
      "Reviewed code and helped students debug and learn best practices",
    ],
    tech: ["React", "Next.js", "Android", "PostgreSQL"],
  },
  {
    role: "Software Engineer Intern",
    company: "Timedoor Academy",
    description:
      "Worked on developing internal tools and contributing to software projects under supervision.",
    period: "2025",
    startYear: 2025,
    highlights: [
      "Built features for internal tools and improved developer workflows",
      "Collaborated with mentors on clean code and maintainable structure",
      "Fixed bugs and shipped iterative improvements",
    ],
    tech: ["TypeScript", "Next.js", "REST API"],
  },
];

export default function ExperienceSection() {
  const items = useMemo(() => {
    return [...experiencesData].sort((a, b) => b.startYear - a.startYear);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(hover: none), (pointer: coarse)");
    const update = () => setIsTouch(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return (
    <section id="section-experience" className="py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
            <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <span className="inline-block py-1 px-3 rounded-full bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4 border border-blue-200 dark:border-blue-800">
                    Experience
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                    Work <span className="text-blue-600 dark:text-blue-400">History</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg mt-4">
                    My professional journey and career growth.
                </p>
            </motion.div>
        </div>

        {/* Timeline: vertical line with nodes, newest at top */}
        <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-6 space-y-12">
          {items.map((exp, idx) => {
            const isActive = isTouch && activeIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ y: 16 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="relative pl-8 group"
              >
                <div className="absolute -left-[7px] top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-md"></div>
                <motion.button
                  type="button"
                  aria-expanded={isTouch ? isActive : undefined}
                  onClick={() => {
                    if (!isTouch) return;
                    setActiveIndex((prev) => (prev === idx ? -1 : idx));
                  }}
                  whileHover={isTouch ? undefined : { y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 420, damping: 30 }}
                  className={`ml-2 w-full text-left bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border relative focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isActive ? "border-blue-300 dark:border-blue-600" : "border-gray-200 dark:border-gray-700"
                  }`}
                >
                  <div className="absolute -inset-2 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.35),transparent_60%)] opacity-0 group-hover:opacity-100 blur-xl -z-10 pointer-events-none"></div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{exp.period}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{exp.company}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{exp.role}</h3>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      <span className="md:hidden">{isActive ? "Tap to close" : "Tap for details"}</span>
                      <span className="hidden md:inline">Hover for details</span>
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                  {isTouch ? (
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-3">
                            <ul className="space-y-2">
                              {exp.highlights.map((h: string) => (
                                <li key={h} className="text-sm text-gray-700 dark:text-gray-300">
                                  <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                                  {h}
                                </li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-2">
                              {exp.tech.map((t: string) => (
                                <span
                                  key={t}
                                  className="text-[11px] font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700/40 px-2 py-1 rounded-md"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  ) : (
                    <div className="overflow-hidden transition-all duration-300 ease-out max-h-0 mt-0 translate-y-2 md:group-hover:max-h-80 md:group-hover:mt-4 md:group-hover:translate-y-0">
                      <div className="space-y-3">
                        <ul className="space-y-2">
                          {exp.highlights.map((h: string) => (
                            <li key={h} className="text-sm text-gray-700 dark:text-gray-300">
                              <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                              {h}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((t: string) => (
                            <span
                              key={t}
                              className="text-[11px] font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700/40 px-2 py-1 rounded-md"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

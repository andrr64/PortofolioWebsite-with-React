"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Braces, Code2, Cpu, Database, GitBranch, Terminal } from "lucide-react";

type IconSpec = {
  key: string;
  Icon: React.ComponentType<{ className?: string }>;
  className: string;
  style: React.CSSProperties;
  duration: number;
  delay: number;
};

const icons: IconSpec[] = [
  {
    key: "code2",
    Icon: Code2,
    className: "text-blue-600/25 dark:text-blue-400/20",
    style: { top: "10%", left: "8%" },
    duration: 10,
    delay: 0.2,
  },
  {
    key: "terminal",
    Icon: Terminal,
    className: "text-indigo-600/20 dark:text-indigo-400/20",
    style: { top: "18%", right: "12%" },
    duration: 12,
    delay: 0.6,
  },
  {
    key: "braces",
    Icon: Braces,
    className: "text-slate-600/18 dark:text-slate-300/18",
    style: { top: "52%", left: "6%" },
    duration: 14,
    delay: 0.1,
  },
  {
    key: "cpu",
    Icon: Cpu,
    className: "text-emerald-600/18 dark:text-emerald-400/16",
    style: { bottom: "18%", left: "16%" },
    duration: 11,
    delay: 0.35,
  },
  {
    key: "database",
    Icon: Database,
    className: "text-sky-600/18 dark:text-sky-400/16",
    style: { bottom: "14%", right: "10%" },
    duration: 13,
    delay: 0.45,
  },
  {
    key: "git",
    Icon: GitBranch,
    className: "text-rose-600/16 dark:text-rose-400/14",
    style: { top: "64%", right: "22%" },
    duration: 15,
    delay: 0.25,
  },
];

export default function CodingIconBackground({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}>
      {icons.map(({ key, Icon, className: iconClassName, style, duration, delay }) => (
        <motion.div
          key={key}
          style={style}
          initial={false}
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -10, 0],
                  rotate: [-2, 2, -2],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration,
                  delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          className="absolute"
        >
          <Icon className={`h-12 w-12 sm:h-14 sm:w-14 ${iconClassName}`} />
        </motion.div>
      ))}
    </div>
  );
}


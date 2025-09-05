'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
};

import notesAppSs from '@/public/notes_app/notesapp_homescreen.jpg';
import todosAppSs from '@/public/todos_app/todos_homepage.jpg';

// Dummy data
const projects: Project[] = [
  {
    id: 1,
    title: 'Notes App',
    description: 'Aplikasi mobile untuk mencatat dan mengelola catatan harian.',
    image: notesAppSs.src,
    tech: ['React Native', 'Expo'],
    link: '/projects/react-native/notes-app',
  },
  {
    id: 2,
    title: 'Todos App',
    description: 'Aplikasi sederhana untuk mencatat daftar tugas (to-do list).',
    image: todosAppSs.src,
    tech: ['React Native', 'Expo'],
    link: '/projects/react-native/todos-app',
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 px-6 py-12">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow transition transform group-hover:scale-[1.02] group-hover:shadow-xl">
                {/* gambar dengan ukuran fix & tidak ke-crop */}
                <div className="relative h-64 w-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>

                <div className="p-5">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

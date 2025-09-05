'use client';

import React from 'react';

interface Step {
    id: number;
    title: string;
    description: string[];
}

export default function RunExpoPage() {
    const steps: Step[] = [
        {
            id: 1,
            title: 'Jalankan project dengan Expo',
            description: [
                'Buka terminal di folder project Expo kamu.',
                'Ketik perintah: npx expo start',
                'Ini akan menjalankan Metro bundler dan membuka QR code di terminal atau browser.',
            ],
        },
        {
            id: 2,
            title: 'Scan QR Code untuk menjalankan aplikasi',
            description: [
                'Buka aplikasi Expo Go di HP Android/iOS kamu.',
                'Scan QR code yang muncul di terminal atau browser.',
                'Aplikasi akan langsung terbuka di HP kamu.',
            ],
        },
    ];

    return (
        <main className="p-6 bg-gray-100 dark:bg-gray-900 w-full min-h-screen transition-colors duration-300">
            <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
                Jalankan Aplikasi Expo
            </h1>

            {steps.map((step) => (
                <div
                    key={step.id}
                    className="mb-8 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md transition-colors duration-300"
                >
                    <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                        {step.id}. {step.title}
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                        {step.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                        ))}
                    </ul>
                </div>
            ))}

            <div className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                <p>
                    Pastikan HP dan PC berada di jaringan yang sama agar QR code bisa
                    discan dengan sukses.
                </p>
            </div>
        </main>
    );
}

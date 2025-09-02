"use client";
import { motion } from "framer-motion";

export default function Page() {
    return (
        <main className="flex h-screen items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center p-8 rounded-2xl bg-black/30 shadow-xl backdrop-blur-md"
            >
                <h1 className="text-4xl font-bold mb-4">🚧 Masih Dikembangkan 🚧</h1>
                <p className="text-lg mb-6">
                    Halaman ini sedang dalam tahap pengembangan.
                    Nantikan update terbaru dari kami!
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-md hover:bg-gray-100 transition"
                    onClick={() => window.location.href = "/"}
                >
                    Refresh
                </motion.button>
            </motion.div>
        </main>
    );
}

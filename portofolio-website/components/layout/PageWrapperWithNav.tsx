import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface LayoutWithNavFootProps {
    children: ReactNode;
}

export default function LayoutWithNavFoot({ children }: LayoutWithNavFootProps) {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900 transition-colors duration-500">
            {/* Header */}
            <Header />

            {/* Konten Utama */}
            <motion.main
                className="flex-1"
                initial={{ y: 12 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                {children}
            </motion.main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

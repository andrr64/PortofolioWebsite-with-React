import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

interface LayoutWithNavFootProps {
    children: ReactNode;
}

export default function LayoutWithNavFoot({ children }: LayoutWithNavFootProps) {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <Header />

            {/* Konten Utama */}
            <main className="flex-1">{children}</main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default function Header() {
    return (
        <nav className="sticky top-0 z-50 w-full bg-white flex items-center justify-between px-6 py-4 shadow-sm">
            {/* Logo */}
            <div
                className="text-2xl font-extrabold select-none"
                style={{ fontFeatureSettings: "'liga' 0" }}
            >
                Mänkö
            </div>

            {/* Menu */}
            <ul className="hidden sm:flex space-x-8 text-base font-normal">
                <li>
                    <a href="#" className="hover:underline">
                        About
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:underline">
                        Pricing
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:underline">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:underline">
                        Services
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:underline">
                        Blog
                    </a>
                </li>
            </ul>

            {/* CTA Button */}
            <button
                type="button"
                className="hidden sm:block bg-black text-white text-sm font-semibold rounded-full px-6 py-2 hover:bg-gray-800 transition"
            >
                Contact us
            </button>
        </nav>
    );
}

export default function HeroSection() {
    return (
        <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 py-16 flex flex-col-reverse md:flex-row items-center justify-between min-h-screen">
            <section className="max-w-xl md:max-w-lg lg:max-w-xl">
                <h1 className="text-[2.75rem] sm:text-[3rem] md:text-[3.5rem] font-extrabold leading-[1.1] text-[#0a0a23]">
                    Building digital
                    <br />
                    products, brands
                    <br />
                    <span className="flex items-center space-x-3">
                        <span className="inline-flex justify-center items-center w-9 h-9 rounded-full bg-[#5c4def] text-white text-lg font-bold">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                        <span className="text-[#5c4def] font-extrabold text-[2.75rem] sm:text-[3rem] md:text-[3.5rem] leading-[1.1]">
                            experience.
                        </span>
                    </span>
                </h1>

                <p className="mt-6 text-[#0a0a23] text-base sm:text-lg max-w-md leading-relaxed">
                    a <strong>Product Designer</strong> and{" "}
                    <strong>Visual Developer</strong> in SF.
                    <br />
                    I specialize in UI/UX Design, Responsive Web Design, and Visual
                    Development.
                </p>

                {/* FORM */}
                <form className="mt-8 flex max-w-md">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="flex-grow px-4 py-3 rounded-l-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5c4def] focus:border-transparent text-gray-500"
                    />
                    <button
                        type="submit"
                        className="bg-[#5c4def] text-white px-6 py-3 rounded-r-md font-semibold text-sm hover:bg-[#4a3adf] transition-colors"
                    >
                        Connect With Me
                    </button>
                </form>
            </section>

            {/* RIGHT SECTION */}
            <section className="mb-12 md:mb-0">
                <img
                    src="https://storage.googleapis.com/a1aa/image/2f008510-1736-4e25-7c4f-65dfa23d6d09.jpg"
                    alt="Man smiling with a light background"
                    className="w-[480px] max-w-full h-auto"
                    loading="lazy"
                />
            </section>
        </section>
    )
}
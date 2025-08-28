export default function ExperienceSection() {
    return (
        <section className="bg-[#f9f7f1] min-h-[600px] flex items-center justify-center p-6">
            <div className="max-w-4xl w-full">
                <h1 className="text-center text-slate-900 font-semibold text-4xl mb-10">
                    My Work Experience
                </h1>
                <div className="flex flex-col md:flex-row md:space-x-10">
                    {/* Left side: job titles and dates */}
                    <div className="flex flex-col space-y-12 md:w-1/3 text-slate-900 font-semibold text-sm">
                        <div>
                            <p>Self-Employed, Brisbane</p>
                            <p className="font-normal text-xs mt-1">Sep 2016 - Aug 2014</p>
                        </div>
                        <div>
                            <p>New Man Services</p>
                            <p className="font-normal text-xs mt-1">Jan 17 - Mar 2018</p>
                        </div>
                        <div>
                            <p>Global Solution</p>
                            <p className="font-normal text-xs mt-1">Feb 2019 - Mar 2020</p>
                        </div>
                    </div>

                    {/* Middle timeline with dots and dotted line */}
                    <div className="relative hidden md:flex flex-col items-center w-12">
                        <div className="w-3 h-3 rounded-full bg-slate-700 mb-16"></div>
                        <div className="flex-1 border-r-2 border-dotted border-slate-300"></div>
                        <div className="w-3 h-3 rounded-full bg-[#f87171] mt-16 mb-16"></div>
                        <div className="flex-1 border-r-2 border-dotted border-slate-300"></div>
                        <div className="w-3 h-3 rounded-full bg-[#facc15] mt-16"></div>
                    </div>

                    {/* Right side: job roles and descriptions */}
                    <div className="flex flex-col space-y-12 md:w-2/3 text-slate-700 text-xs">
                        <div>
                            <p className="font-semibold mb-1">Visual Designer</p>
                            <p>
                                A visual designer designs for a variety of platforms, which may
                                include Internet and intranet sites, games, movies, kiosks and
                                wearables. In short, they create the concepts,
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold mb-1">UI/UX Designer</p>
                            <p>
                                User interface design or user interface engineering is the
                                design of user interfaces for machines and software, such as
                                computers, home appliances, mobile devices.
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold mb-1">Sr. Product Designer</p>
                            <p>
                                Find Product Photography Canada. Large Selection. Always Sale.
                                Cheap Prices. Full Offer. Save Online. Compare Online. Simple
                                Search. The Best Price. Compare Simply.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

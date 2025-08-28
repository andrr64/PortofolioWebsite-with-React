export default function ProjectsSection() {
    const projects = Array(6).fill({
        category: "Development",
        type: "Dashboard App",
        title: "Cashify",
        description:
            "How do you create compelling presentations that wow your colleagues and impress your managers?",
        image: "https://storage.googleapis.com/a1aa/image/054ae9da-9861-4f56-9abb-85478f325896.jpg",
        deco: "https://storage.googleapis.com/a1aa/image/68c566ce-f5e5-4b70-f0c1-9a1d71b91010.jpg",
    });

    return (
        <section className="bg-[#F9FAFB] text-[#111827] py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                        My <span className="text-[#D35400]">Development Work</span>
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-gray-600 font-normal">
                        Diverse Range of Projects From Desktop to Web Applications
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl p-6 shadow-sm relative overflow-hidden border border-transparent hover:border-gray-200 transition"
                        >
                            {/* Tags */}
                            <div className="flex space-x-2 mb-3">
                                <span className="text-[10px] font-semibold text-[#D35400] bg-[#FCE9D6] rounded-full px-2 py-0.5 inline-block">
                                    {project.category}
                                </span>
                                <span className="text-[10px] font-semibold text-[#3B82F6] bg-[#DBEAFE] rounded-full px-2 py-0.5 inline-block">
                                    {project.type}
                                </span>
                            </div>

                            {/* Icon */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="mb-3"
                                width={20}
                                height={20}
                            />

                            {/* Title */}
                            <h3 className="font-extrabold text-base text-gray-900 mb-1">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Button */}
                            <button
                                type="button"
                                className="inline-flex items-center bg-[#D35400] text-white text-xs font-semibold rounded px-3 py-2 hover:bg-[#b34700] transition"
                            >
                                View Project
                                <i className="fas fa-arrow-right ml-2 text-[10px]" />
                            </button>

                            {/* Decorative Icon */}
                            <img
                                src={project.deco}
                                alt="Decoration"
                                className="absolute bottom-4 right-4 opacity-10"
                                width={40}
                                height={40}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { ArrowRight, ExternalLink, Github } from "lucide-react";
import AnimatedFlowchart from "./animated_flowchart/AnimatedFlowchart";


const projects = [
    {
        id: 1,
        title: "Netflix Clone",
        Description: "A responsive Netflix Clone built with React.JS and CSS, focusing on layout, design, and mobile-friendly structure.",
        image: "/projects/Netflix.png",
        tags: ["React", "CSS", "Firebase", "TMDB"],
        demoUrl: "https://playnix.netlify.app/",
        GithubUrl: "https://github.com/amankhare12/Netflix-Clone",
    },
    {
        id: 2,
        title: "Password Manager App",
        Description: "A simple and secure password manager where you can save your website credentials (website, username, and password), edit them, and delete them anytime.",
        image: "/projects/project4.png",
        tags: ["React", "TailwindCSS"],
        demoUrl: "https://getpassop.netlify.app/",
        GithubUrl: "https://github.com/amankhare12/Password-Manager",
    },
    {
        id: 3,
        title: "Cryptoplace",
        Description: "A clean and responsive crypto tracker that helps users stay updated with live prices and global market stats.",
        image: "/projects/project5.png",
        tags: ["React", "CSS", "Coingecko API"],
        demoUrl: "https://thecryptoplace.netlify.app/",
        GithubUrl: "https://github.com/amankhare12/Cryptoplace",
    },
    {
        id: 4,
        title: "Spotify Landing Page",
        Description: "A responsive Spotify-inspired music player clone featuring an interactive UI, modern design, and smooth user experience.",
        image: "/projects/project2.jpg",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "#",
        GithubUrl: "#",
    },
    {
        id: 5,
        title: "Twitter Landing Page",
        Description: "A modern Twitter-inspired clone with an engaging UI and responsive design, replicating core social media layout and interactions.",
        image: "/projects/project3.png",
        tags: ["HTML", "TailwindCSS"],
        demoUrl: "#",
        GithubUrl: "#",
    },
];

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-100"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary">{tag}</span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.Description}</p>

                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="flex items-center justify-center gap-1.5 text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} /> <span>Demo</span>
                                        </a>
                                        <a
                                            href={project.GithubUrl}
                                            target="_blank"
                                            className="flex items-center justify-center gap-1.5 text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} /> <span>Code</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/amankhare12"
                        target="_blank"
                        className="primary-button w-fit flex items-center mx-auto gap-2"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>

                {/* <div className="text-center mt-12">
                    <AnimatedFlowchart />
                </div> */}
            </div>
        </section>
    )
}

export default ProjectsSection

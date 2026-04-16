import { ArrowRight, ExternalLink, Github } from "lucide-react";
import AnimatedFlowchart from "./animated_flowchart/AnimatedFlowchart";
import { useLanguage } from "../context/languageContext";


const projects = [
    {
        id: 1,
        title: "Netflix Clone",
        Description: "A responsive Netflix Clone built with React.JS and CSS, focusing on layout, design, and mobile-friendly structure.",
        DescriptionHi: "React.JS और CSS से बना responsive Netflix Clone, जो layout, design और mobile-friendly structure पर केंद्रित है।",
        image: "/projects/Netflix.png",
        tags: ["React", "CSS", "Firebase", "TMDB"],
        demoUrl: "https://playnix.netlify.app/",
        GithubUrl: "https://github.com/amankhare12/Netflix-Clone",
    },
    {
        id: 2,
        title: "Password Manager App",
        Description: "A simple and secure password manager where you can save your website credentials (website, username, and password), edit them, and delete them anytime.",
        DescriptionHi: "एक सरल और सुरक्षित password manager जहां आप website credentials (website, username, password) सेव, edit और delete कर सकते हैं।",
        image: "/projects/project4.png",
        tags: ["React", "TailwindCSS"],
        demoUrl: "https://getpassop.netlify.app/",
        GithubUrl: "https://github.com/amankhare12/Password-Manager",
    },
    {
        id: 3,
        title: "Cryptoplace",
        Description: "A clean and responsive crypto tracker that helps users stay updated with live prices and global market stats.",
        DescriptionHi: "एक clean और responsive crypto tracker जो users को live prices और global market stats से अपडेट रखता है।",
        image: "/projects/project5.png",
        tags: ["React", "CSS", "Coingecko API"],
        demoUrl: "https://thecryptoplace.netlify.app/",
        GithubUrl: "https://github.com/amankhare12/Cryptoplace",
    },
    {
        id: 4,
        title: "Spotify Landing Page",
        Description: "A responsive Spotify-inspired music player clone featuring an interactive UI, modern design, and smooth user experience.",
        DescriptionHi: "Spotify से प्रेरित responsive music player clone, जिसमें interactive UI, modern design और smooth user experience है।",
        image: "/projects/project2.jpg",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "#",
        GithubUrl: "#",
    },
    {
        id: 5,
        title: "Twitter Landing Page",
        Description: "A modern Twitter-inspired clone with an engaging UI and responsive design, replicating core social media layout and interactions.",
        DescriptionHi: "Twitter से प्रेरित modern clone जिसमें engaging UI और responsive design के साथ core social media layout और interactions शामिल हैं।",
        image: "/projects/project3.png",
        tags: ["HTML", "TailwindCSS"],
        demoUrl: "#",
        GithubUrl: "#",
    },
];

const ProjectsSection = () => {
    const { language } = useLanguage();

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {language === "en" ? "Featured" : "मुख्य"} <span className="text-primary">{language === "en" ? "Projects" : "प्रोजेक्ट्स"}</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    {language === "en"
                        ? "Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience."
                        : "यह मेरे कुछ हाल के प्रोजेक्ट्स हैं। हर प्रोजेक्ट को detail, performance और user experience पर ध्यान देकर बनाया गया है।"}
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
                                <p className="text-muted-foreground text-sm mb-4">
                                    {language === "en" ? project.Description : project.DescriptionHi}
                                </p>

                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="flex items-center justify-center gap-1.5 text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} /> <span>{language === "en" ? "Demo" : "डेमो"}</span>
                                        </a>
                                        <a
                                            href={project.GithubUrl}
                                            target="_blank"
                                            className="flex items-center justify-center gap-1.5 text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} /> <span>{language === "en" ? "Code" : "कोड"}</span>
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
                        {language === "en" ? "Check My Github" : "मेरा Github देखें"} <ArrowRight size={16} />
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

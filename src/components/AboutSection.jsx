import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'
import { useLanguage } from '../context/languageContext'

const AboutSection = () => {
    const { language } = useLanguage()

    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
                    {language === "en" ? "About" : "मेरे"} <span className="text-primary">{language === "en" ? " Me" : " बारे में"}</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            {language === "en" ? "Passionate Web Developer & Tech Creator" : "जुनूनी वेब डेवलपर और टेक क्रिएटर"}
                        </h3>

                        <p className="text-muted-foreground">
                            {language === "en"
                                ? "With hands-on experience in frontend development, I specialize in crafting responsive, user-friendly, and visually appealing web applications using modern technologies like React, Tailwind CSS, and JavaScript."
                                : "फ्रंटेंड डेवलपमेंट के practical अनुभव के साथ, मैं React, Tailwind CSS और JavaScript जैसी आधुनिक तकनीकों से responsive, user-friendly और visually appealing web applications बनाता हूं।"}
                        </p>

                        <p className="text-muted-foreground">
                            {language === "en"
                                ? "I am passionate about turning ideas into seamless digital experiences, and I am always learning new tools and techniques to stay ahead in the ever-evolving web development world."
                                : "मुझे ideas को seamless digital experiences में बदलना पसंद है, और मैं web development की बदलती दुनिया में आगे रहने के लिए हमेशा नए tools और techniques सीखता रहता हूं।"}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="primary-button">
                                {language === "en" ? "Get In Touch" : "संपर्क करें"}
                            </a>


                            <a href="#" className="flex items-center justify-center px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                {language === "en" ? "Download CV" : "CV डाउनलोड करें"}
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                      {language === "en"
                                        ? "Creating responsive website and web applications with modern frameworks."
                                        : "आधुनिक frameworks के साथ responsive वेबसाइट और web applications बनाना।"}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground">
                                      {language === "en"
                                        ? "Designing intuitive user interfaces and seamless user experiences."
                                        : "Intuitive user interfaces और seamless user experiences डिजाइन करना।"}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">
                                      {language === "en"
                                        ? "Leading projects from conception to completion with agile methodologies."
                                        : "Agile methodologies के साथ projects को शुरुआत से completion तक lead करना।"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection

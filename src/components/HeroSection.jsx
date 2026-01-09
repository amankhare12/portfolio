import { ArrowDown } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-7xl mx-auto text-center">
                <div className=" flex flex-col justify-center space-y-6 text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Aman</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Khare</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I focus on creating seamless UI/UX with modern tools like React, Tailwind CSS,
                        and JavaScript frameworks, turning ideas into interactive digital experiences.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="primary-button">
                            View My Work
                        </a>
                    </div>
                </div>

                {/* <div className="hidden lg:flex justify-end">
                    <div>
                    <Spline scene="https://prod.spline.design/PcvPHuZArdDjI10L/scene.splinecode" />
                    </div>
                </div> */}
            </div>

            <div className="absolute bottom-8 transform-translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>

        </section>
    )
}

export default HeroSection

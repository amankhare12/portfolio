import React from 'react'
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from '../components/StarBackground';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import LightRays from "../components/backgroundAnimation/LightRays";
const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme toggle */}
      {/* <ThemeToggle /> */}

      {/* Background Effects */}
      {/* <StarBackground /> */}
      <div style={{ width: '100%', height: '600px', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
  <LightRays
    raysOrigin="top-center"
    raysColor="#fff"
    raysSpeed={0.8}
    lightSpread={0.9}
    rayLength={1.0}
    followMouse={true}
    mouseInfluence={0.2}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays"
  />
</div>

      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default Home

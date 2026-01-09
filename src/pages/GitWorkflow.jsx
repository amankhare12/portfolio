import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import GitWorkflowSection from '../components/GitWorkflowSection'
import Footer from '../components/Footer'
import LightRays from "../components/backgroundAnimation/LightRays"
import FadeInSection from '../components/FadeInSection'

const GitWorkflow = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Effects */}
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
        <FadeInSection>
          <GitWorkflowSection />
        </FadeInSection>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default GitWorkflow

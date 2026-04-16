import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"
import Home from "./pages/Home"
import GitWorkflow from "./pages/GitWorkflow"
import NotFound from "./pages/NotFound"
import { LanguageProvider } from "./context/languageContext"
import "./App.css"
function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)
  const [language, setLanguage] = useState(() => localStorage.getItem("language") || "en")

  useEffect(() => {
    const MIN_LOADING_TIME = 2000 // 2 second
    const startTime = Date.now()

    // Progress milestones: 80% -> 90% -> 98% -> 100%
    setTimeout(() => setProgress(30), 400)   // At 300ms
    setTimeout(() => setProgress(40), 600)   // At 600ms
    setTimeout(() => setProgress(50), 800)   // At 800ms
    setTimeout(() => setProgress(60), 1000)   // At 1000ms
    setTimeout(() => setProgress(70), 1200)  // At 1200ms
    setTimeout(() => setProgress(80), 1400)   // At 1400ms
    setTimeout(() => setProgress(90), 1600)  // At 1600ms
    setTimeout(() => setProgress(100), 1800) // At 1800ms

    const completeLoading = () => {
      const elapsedTime = Date.now() - startTime
      const remainingTime = Math.max(0, MIN_LOADING_TIME - elapsedTime)
      
      // Ensure progress reaches 100% if not already
      setProgress(100)
      
      setTimeout(() => {
        setFadeOut(true)
        setTimeout(() => {
          setIsLoading(false)
        }, 100) // Match CSS transition duration
      }, remainingTime)
    }

    const handleLoad = () => {
      completeLoading()
    }

    // If the document is already loaded, still show loader for minimum time
    if (document.readyState === "complete") {
      completeLoading()
    } else {
      window.addEventListener("load", handleLoad)
    }

    return () => {
      window.removeEventListener("load", handleLoad)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  return (
    <LanguageProvider value={{ language, setLanguage }}>
    <div className="app-root">
      {isLoading && (
        <div className={`app-loader-overlay ${fadeOut ? 'app-loader-fade-out' : ''}`}>
          <div className="app-loader-glow-bg">
            <div className="app-loader-glow-circle app-loader-glow-left"></div>
            <div className="app-loader-glow-circle app-loader-glow-right"></div>
          </div>
          <div className="app-loader-content">
          <span className="relative z-10">
            <img className="w-9 h-9 rounded-sm" src="/logo/Logo6.png" alt="" srcset="" />
          </span>
            <p className="app-loader-text">{language === "en" ? "Loading Portfolio..." : "पोर्टफोलियो लोड हो रहा है..."}</p>
            <div className="app-loader-progress-container">
              <div className="app-loader-progress-bar">
                <div 
                  className="app-loader-progress-fill" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <span className="app-loader-percentage">{progress}%</span>
            </div>
          </div>
        </div>
      )}

      {!isLoading && (
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/git-workflow" element={<GitWorkflow />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
    </LanguageProvider>
  )
}

export default App

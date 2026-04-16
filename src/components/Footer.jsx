import { ArrowUp } from 'lucide-react'
import React from 'react'
import { useLanguage } from '../context/languageContext'

const Footer = () => {
  const { language } = useLanguage()

  return (
    <footer className="py-4 px-4 bg-card relative border-t border-border mt-12 pt-4 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} AmanKhare. {language === "en" ? "All rights reserved." : "सर्वाधिकार सुरक्षित।"}
      </p>
      <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
        <ArrowUp />
      </a>
    </footer>
  )
}

export default Footer

import React from 'react'
import { useLanguage } from '../context/languageContext'

const NotFound = () => {
  const { language } = useLanguage()

  return (
    <div>
      {language === "en" ? "Not found" : "पेज नहीं मिला"}
    </div>
  )
}

export default NotFound

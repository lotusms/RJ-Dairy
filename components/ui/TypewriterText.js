'use client'

import { useState, useEffect } from 'react'

export default function TypewriterText({ text, className = '', delay = 100, onComplete }) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    } else if (currentIndex === text.length) {
      // Hide cursor after a short delay when animation completes
      const cursorTimeout = setTimeout(() => {
        setShowCursor(false)
        if (onComplete) {
          onComplete()
        }
      }, 500)
      
      return () => clearTimeout(cursorTimeout)
    }
  }, [currentIndex, text, delay, onComplete])

  useEffect(() => {
    // Reset when text changes
    setDisplayedText('')
    setCurrentIndex(0)
    setShowCursor(true)
  }, [text])

  return (
    <span className={className}>
      {displayedText}
      {showCursor && <span className="animate-pulse">|</span>}
    </span>
  )
}


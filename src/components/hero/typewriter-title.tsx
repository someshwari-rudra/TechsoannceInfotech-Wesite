"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"

export function TypewriterTitle() {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const words = siteConfig.hero.dynamicWords
  const staticText = siteConfig.hero.staticText

  useEffect(() => {
    const currentWord = words[wordIndex]
    
    const handleTyping = () => {
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1))
        setTypingSpeed(50)
      } else {
        setText(currentWord.substring(0, text.length + 1))
        setTypingSpeed(150)
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, wordIndex, words, typingSpeed])

  return (
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-[#29619e]">
            {siteConfig.hero.staticText}
          </span>
      {/* Fixed width container to prevent layout shift - width calculated for longest word "Intelligence" */}
      <span className="inline-grid">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-brand-deep to-cyan-400 text-glow col-start-1 row-start-1 inline-flex whitespace-pre">
          {text || '\u200B'}{/* Zero-width space when empty to prevent collapse */}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-[3px] h-[1em] bg-gradient-to-b from-cyan-400 to-[#29619e] ml-1 align-middle inline-block flex-shrink-0"
          />
        </span>
        {/* Invisible text to reserve space for longest word */}
        <span className="invisible col-start-1 row-start-1 whitespace-pre" aria-hidden="true">Intelligence</span>
      </span>
    </h1>
  )
}

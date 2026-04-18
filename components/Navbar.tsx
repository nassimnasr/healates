'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useTranslation } from '@/context/useTranslation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { lang, dir, toggleLang } = useLanguage()
  const { t } = useTranslation()

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#schedule', label: t.nav.schedule },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-100"
      dir={dir}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="text-2xl font-display font-bold text-brand">
            {t.brand}
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-brand hover:text-brand-light transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Lang Toggle + Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* Mobile Menu Button - hidden on lg+ */}
            <button
              className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full bg-brand text-white hover:bg-brand-light transition-colors shadow-md"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <button
              onClick={toggleLang}
              className="text-sm font-semibold px-3 py-1.5 rounded-full bg-brand text-white hover:bg-brand-light transition-colors"
            >
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white border-t border-brand-100"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-semibold text-brand hover:bg-brand-50 px-4 py-4 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
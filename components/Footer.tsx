'use client'

import { motion } from 'framer-motion'
import { MapPin, Instagram, Phone, Facebook } from 'lucide-react'
import { useTranslation } from '@/context/useTranslation'

const WHATSAPP_NUMBER = '+96181419557'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`
const INSTAGRAM_LINK = 'https://www.instagram.com/healates.lb/'
const FACEBOOK_LINK = 'https://www.facebook.com/share/1ahfM9wTWo/'
const LOCATION_LINK = 'https://maps.app.goo.gl/rTkSXpf1v67MLkVM7'

export default function Footer() {
  const { t, lang } = useTranslation()

  return (
    <footer id="contact" className="bg-brand text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">{t.brand}</h3>
            <p className="text-brand-100 text-sm mb-4">{t.tagline}</p>
            <div className="flex items-center gap-2 text-brand-100">
              <Instagram size={18} />
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm">
                {t.footer.instagram}
              </a>
            </div>
            <div className="flex items-center gap-2 text-brand-100 mt-2">
              <Facebook size={18} />
              <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm">
                Facebook
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{lang === 'en' ? 'Quick Links' : 'روابط سريعة'}</h4>
            <ul className="space-y-2 text-brand-100 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">{t.nav.home}</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">{t.nav.schedule}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{lang === 'en' ? 'Contact' : 'تواصل معنا'}</h4>
            <div className="space-y-3 text-brand-100 text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>{t.footer.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {WHATSAPP_NUMBER}
                </a>
              </div>
              <p className="text-sm">{t.footer.hours}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-light text-center text-brand-100 text-sm">
          <p>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
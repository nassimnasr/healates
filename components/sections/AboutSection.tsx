'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Facebook } from 'lucide-react'
import { useTranslation } from '@/context/useTranslation'

const INSTAGRAM_LINK = 'https://www.instagram.com/healates.lb/'
const FACEBOOK_LINK = 'https://www.facebook.com/share/1ahfM9wTWo/'
const LOCATION_LINK = 'https://maps.app.goo.gl/rTkSXpf1v67MLkVM7'

const WHATSAPP_NUMBER = '+96181419557'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {target}
      {suffix}
    </motion.span>
  )
}

export default function AboutSection() {
  const { t, lang } = useTranslation()

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 },
  }

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand mb-4">
            {t.about.title}
          </h2>
          <p className="text-lg text-brand-light max-w-xl mx-auto">{t.about.subtitle}</p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">

          {/* Images Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Studio image - main */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl mb-4">
              <Image
                src="/studio.jpeg"
                alt="Healates Studio"
                fill
                className="object-cover"
              />
            </div>
            {/* Founder image - floating */}
            <div className="absolute -bottom-8 -right-4 sm:right-4 w-36 sm:w-44 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/founder1.png"
                alt="Daniel Fahed - Founder"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            className="lg:pl-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-brand leading-relaxed text-base sm:text-lg mb-8">
              {t.about.story}
            </p>

            {/* Mission */}
            <div className="bg-brand-50 rounded-xl p-6 mb-8 border-l-4 border-brand">
              <p className="text-sm font-semibold text-brand uppercase tracking-wide mb-2">
                {lang === 'en' ? 'Our Mission' : 'رسالتنا'}
              </p>
              <p className="text-brand-light text-base italic">
                &ldquo;{t.about.mission}&rdquo;
              </p>
            </div>

            {/* Founders */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg font-bold">
                    {t.about.daniel.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-brand">{t.about.daniel.name}</h4>
                  <p className="text-xs text-brand-light uppercase tracking-wide">
                    {t.about.daniel.role}
                  </p>
                  <p className="text-sm text-brand-muted mt-1">{t.about.daniel.bio}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg font-bold">
                    {t.about.henry.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-brand">{t.about.henry.name}</h4>
                  <p className="text-xs text-brand-light uppercase tracking-wide">
                    {t.about.henry.role}
                  </p>
                  <p className="text-sm text-brand-muted mt-1">{t.about.henry.bio}</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <a
              href={LOCATION_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-light transition-colors mb-6"
            >
              <MapPin size={18} />
              {t.about.location}
            </a>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-3 gap-4 sm:gap-8 bg-brand rounded-2xl p-6 sm:p-10 text-white"
          {...fadeInUp}
        >
          <div className="text-center">
            <p className="text-3xl sm:text-5xl font-display font-bold mb-1">
              <AnimatedCounter target={100} suffix="+" />
            </p>
            <p className="text-xs sm:text-sm text-white/70">
              {lang === 'en' ? 'Happy Clients' : 'عميل سعيد'}
            </p>
          </div>
          <div className="text-center border-x border-white/20">
            <p className="text-3xl sm:text-5xl font-display font-bold mb-1">
              <AnimatedCounter target={12} />
            </p>
            <p className="text-xs sm:text-sm text-white/70">
              {lang === 'en' ? 'Weekly Classes' : 'صفوف أسبوعية'}
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-5xl font-display font-bold mb-1">
              <AnimatedCounter target={3} />
            </p>
            <p className="text-xs sm:text-sm text-white/70">
              {lang === 'en' ? 'Years Experience' : 'سنوات خبرة'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Clock, Users, Calendar, Layers, ArrowRight, Star } from 'lucide-react'
import { useTranslation } from '@/context/useTranslation'

const WHATSAPP_NUMBER = '+96181419557'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`

interface ClassCardProps {
  image: string
  title: string
  description: string
  schedule: string
  duration: string
  groupSize: string
  note: string
  level: string
  durationLabel: string
  levelLabel: string
  groupSizeLabel: string
  scheduleLabel: string
  minutesLabel: string
  maxLabel: string
  peopleLabel: string
  bookLabel: string
  index: number
  accent: string
  icon: React.ReactNode
}

function ClassCard({
  image,
  title,
  description,
  schedule,
  duration,
  groupSize,
  note,
  level,
  durationLabel,
  levelLabel,
  groupSizeLabel,
  scheduleLabel,
  minutesLabel,
  maxLabel,
  peopleLabel,
  bookLabel,
  index,
  accent,
  icon,
}: ClassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Level badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-brand text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
          <Layers size={12} />
          {level}
        </div>

        {/* Note badge */}
        {note && (
          <div
            className="absolute top-4 right-4 flex items-center gap-1 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-sm"
            style={{ backgroundColor: accent }}
          >
            <Star size={11} />
            {note}
          </div>
        )}

        {/* Title overlay on image */}
        <div className="absolute bottom-4 left-5 right-5">
          <div className="flex items-center gap-2.5 mb-1">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white shadow-lg"
              style={{ backgroundColor: accent }}
            >
              {icon}
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white drop-shadow-md">
              {title}
            </h3>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <p className="text-brand-light text-sm leading-relaxed mb-5">
          {description}
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="flex items-center gap-2 bg-brand-50/60 rounded-xl px-3 py-2.5">
            <Calendar size={15} className="text-brand flex-shrink-0" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-brand-light font-medium">
                {scheduleLabel}
              </p>
              <p className="text-xs font-semibold text-brand leading-tight">
                {schedule}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-brand-50/60 rounded-xl px-3 py-2.5">
            <Clock size={15} className="text-brand flex-shrink-0" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-brand-light font-medium">
                {durationLabel}
              </p>
              <p className="text-xs font-semibold text-brand">
                {duration} {minutesLabel}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-brand-50/60 rounded-xl px-3 py-2.5">
            <Users size={15} className="text-brand flex-shrink-0" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-brand-light font-medium">
                {groupSizeLabel}
              </p>
              <p className="text-xs font-semibold text-brand">
                {maxLabel} {groupSize} {peopleLabel}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-brand-50/60 rounded-xl px-3 py-2.5">
            <Layers size={15} className="text-brand flex-shrink-0" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-brand-light font-medium">
                {levelLabel}
              </p>
              <p className="text-xs font-semibold text-brand">{level}</p>
            </div>
          </div>
        </div>

        {/* Book CTA */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          style={{ backgroundColor: accent }}
        >
          {bookLabel}
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>

      {/* Hover accent border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundColor: accent }}
      />
    </motion.div>
  )
}

export default function ClassesSection() {
  const { t, lang } = useTranslation()

  const classes = [
    {
      key: 'pilates' as const,
      image: '/pilates.png',
      accent: '#274B59',
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M6 12h12"/></svg>,
    },
    {
      key: 'yoga' as const,
      image: '/yoga.png',
      accent: '#3A6A80',
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>,
    },
    {
      key: 'aerial' as const,
      image: '/aerial-yoga.png',
      accent: '#5A8A6E',
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
    },
    {
      key: 'private' as const,
      image: '/private-session.png',
      accent: '#8B6F4E',
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    },
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 },
  }

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F5F5F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <motion.span
            className="inline-block text-brand-light text-sm font-semibold uppercase tracking-[0.2em] mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {lang === 'en' ? 'What We Offer' : 'ما نقدّمه'}
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-brand-light max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
          {/* Decorative line */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="w-12 h-[2px] bg-brand/20 rounded-full" />
            <div className="w-3 h-3 rounded-full bg-brand/30" />
            <div className="w-12 h-[2px] bg-brand/20 rounded-full" />
          </div>
        </motion.div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {classes.map((cls, index) => {
            const classData = t.services[cls.key]
            return (
              <ClassCard
                key={cls.key}
                image={cls.image}
                title={classData.title}
                description={classData.description}
                schedule={classData.schedule}
                duration={classData.duration}
                groupSize={classData.groupSize}
                note={classData.note}
                level={t.services.allLevels}
                durationLabel={t.services.duration}
                levelLabel={t.services.level}
                groupSizeLabel={t.services.groupSize}
                scheduleLabel={t.services.schedule}
                minutesLabel={t.services.minutes}
                maxLabel={t.services.maxPeople}
                peopleLabel={t.services.people}
                bookLabel={t.services.bookNow}
                index={index}
                accent={cls.accent}
                icon={cls.icon}
              />
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl px-8 py-6 shadow-md">
            <div className="text-center sm:text-left">
              <p className="text-brand font-display font-semibold text-lg">
                {lang === 'en' ? 'Book your spot in advance!' : 'احجزي مقعدك مقدمًا!'}
              </p>
              <p className="text-brand-light text-sm">
                {lang === 'en'
                  ? 'All classes are by appointment — reserve via WhatsApp'
                  : 'جميع الصفوف بالحجز المسبق — احجزي عبر واتساب'}
              </p>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-brand-light hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {t.services.bookNow}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

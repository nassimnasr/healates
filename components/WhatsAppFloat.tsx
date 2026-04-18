'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useTranslation } from '@/context/useTranslation'

const WHATSAPP_NUMBER = '+96181419557'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`

export default function WhatsAppFloat() {
  const { t } = useTranslation()

  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="hidden sm:inline text-sm font-semibold">{t.whatsapp.default}</span>
    </motion.a>
  )
}
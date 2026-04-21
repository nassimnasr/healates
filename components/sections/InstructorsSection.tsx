'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

interface Instructor {
  id: string;
  name: string;
  title: string;
  certification: string;
  photo?: string;
}

const INSTRUCTORS: Instructor[] = [
  {
    id: 'zoyie',
    name: 'Zoyie Sassine',
    title: 'Pilates Instructor',
    certification: 'Bachelor in Physical Therapy',
    photo: '/instructors/zoyie.jpg',
  },
  {
    id: 'marie',
    name: 'Marie Nour Abdo',
    title: 'Pilates Instructor',
    certification: 'Bachelor in Physical Therapy',
    photo: '/instructors/marie.jpg',
  },
  {
    id: 'cidale',
    name: 'Cidale Obeid',
    title: 'Aerial Yoga Instructor',
    certification: 'Bachelor in Physical Therapy',
    photo: '/instructors/cidale.jpg',
  },
  {
    id: 'sarah',
    name: 'Sarah Shamra',
    title: 'Yoga Instructor',
    certification: 'Bachelor in Physical Therapy',
    photo: '/instructors/sarah.jpg',
  },
];

const PLACEHOLDER_PHOTO = 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop&crop=face';

export default function InstructorsSection() {
  const { lang } = useLanguage();
  const isRTL = lang === 'ar';

  return (
    <section
      id="instructors"
      className="py-16 px-4 bg-white"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand mb-2">
            {isRTL ? 'المدربات' : 'Our Instructors'}
          </h2>
          <p className="text-brand-light max-w-md mx-auto">
            {isRTL
              ? 'فريقنا من المدربات المحترفات يجمع بين الخبرة وال passion لصحتك'
              : 'Our team of professional instructors combines expertise with passion for your well-being'}
          </p>
        </motion.div>

        {/* Instructors Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {INSTRUCTORS.map((instructor) => (
            <motion.div
              key={instructor.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center text-center"
            >
              {/* Photo */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4 rounded-full overflow-hidden shadow-md ring-2 ring-brand-100 group-hover:ring-brand transition-all">
                <img
                  src={PLACEHOLDER_PHOTO}
                  alt={instructor.name}
                  className="w-full h-full object-cover"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-brand/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs font-medium text-center px-2">
                    {instructor.certification}
                  </span>
                </div>
              </div>

              {/* Info */}
              <h3 className="text-base md:text-lg font-semibold text-brand mb-1">
                {instructor.name}
              </h3>
              <p className="text-sm text-brand-light font-medium mb-2">
                {instructor.title}
              </p>
              <span className="inline-block text-xs bg-brand-50 text-brand px-3 py-1 rounded-full border border-brand-100">
                {instructor.certification}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-brand-light mt-10"
        >
          {isRTL
            ? 'جميع مدرباتنا حاصلات على بكالوريوس في العلاج الطبيعي'
            : 'All of our instructors hold a Bachelor in Physical Therapy'}
        </motion.p>
      </div>
    </section>
  );
}

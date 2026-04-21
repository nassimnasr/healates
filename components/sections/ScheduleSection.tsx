'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

type ClassType = 'pilates' | 'yoga' | 'aerial-yoga';
type Day = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat';

interface ScheduleSlot {
  id: string;
  time: string;
  instructor: string;
  spotsLeft: number;
  maxSpots: number;
  fullyBooked: boolean;
}

interface DaySchedule {
  day: Day;
  date: number;
  slots: ScheduleSlot[];
}

interface ClassSchedule {
  type: ClassType;
  days: DaySchedule[];
}

const WHATSAPP_NUMBER = '+961 V6MPIXDYEDWFI1';

const INSTRUCTORS: Record<ClassType, string> = {
  pilates: 'Zoyie Sassine & Marie Nour Abdo',
  'aerial-yoga': 'Cidale Obeid',
  yoga: 'Sarah Shamra',
};

const CLASS_LABELS: Record<ClassType, { en: string; ar: string }> = {
  pilates: { en: 'Pilates', ar: 'بيلاتس' },
  yoga: { en: 'Yoga', ar: 'يوغا' },
  'aerial-yoga': { en: 'Aerial Yoga', ar: 'يوغا هوائي' },
};

const DAYS: { key: Day; en: string; ar: string }[] = [
  { key: 'mon', en: 'Mon', ar: 'الإثنين' },
  { key: 'tue', en: 'Tue', ar: 'الثلاثاء' },
  { key: 'wed', en: 'Wed', ar: 'الأربعاء' },
  { key: 'thu', en: 'Thu', ar: 'الخميس' },
  { key: 'fri', en: 'Fri', ar: 'الجمعة' },
  { key: 'sat', en: 'Sat', ar: 'السبت' },
];

// Schedule data per class type
const SCHEDULE_DATA: Record<ClassType, { time: string; days: Day[] }[]> = {
  pilates: [
    { time: '8:00 AM', days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'] },
    { time: '9:00 AM', days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'] },
    { time: '10:00 AM', days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'] },
    { time: '11:00 AM', days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'] },
    { time: '12:00 PM', days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'] },
    { time: '2:00 PM', days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'] },
    { time: '3:00 PM', days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'] },
    { time: '4:00 PM', days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'] },
    { time: '5:00 PM', days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'] },
    { time: '6:00 PM', days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'] },
    { time: '7:00 PM', days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'] },
    { time: '8:00 PM', days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'] },
  ],
  yoga: [
    { time: '6:00 PM', days: ['wed', 'fri'] },
  ],
  'aerial-yoga': [
    { time: '4:00 PM', days: ['thu'] },
    { time: '5:00 PM', days: ['thu'] },
    { time: '6:00 PM', days: ['thu'] },
    { time: '2:00 PM', days: ['sat'] },
    { time: '3:00 PM', days: ['sat'] },
    { time: '4:00 PM', days: ['sat'] },
  ],
};

// Mock data — mark `fullyBooked: true` to grey out a slot
const FULLY_BOOKED: Record<ClassType, Set<string>> = {
  pilates: new Set(['pilates-mon-9', 'pilates-tue-11']),
  yoga: new Set([]),
  'aerial-yoga': new Set(['aerial-yoga-thu-5']),
};

function buildSchedule(type: ClassType): DaySchedule[] {
  return DAYS.map((dayInfo, dateIdx) => {
    const slots: ScheduleSlot[] = SCHEDULE_DATA[type]
      .filter((s) => s.days.includes(dayInfo.key))
      .map((s) => {
        const slotId = `${type}-${dayInfo.key}-${s.time.replace(' ', '').replace(':', '')}`;
        const isFullyBooked = FULLY_BOOKED[type].has(slotId);
        return {
          id: slotId,
          time: s.time,
          instructor: INSTRUCTORS[type],
          spotsLeft: isFullyBooked ? 0 : 4,
          maxSpots: 4,
          fullyBooked: isFullyBooked,
        };
      });

    return {
      day: dayInfo.key,
      date: dateIdx + 1,
      slots,
    };
  }).filter((d) => d.slots.length > 0);
}

function getWhatsAppLink(className: string, day: string, time: string): string {
  const message = `Hi! I'd like to book ${className} on ${day} at ${time}`;
  return `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(message)}`;
}

const LEVELS = { en: 'All Levels', ar: 'جميع المستويات' };

export default function ScheduleSection() {
  const { lang } = useLanguage();
  const [activeClass, setActiveClass] = useState<ClassType>('pilates');
  const [activeDay, setActiveDay] = useState<Day>('mon');

  const schedule = buildSchedule(activeClass);
  const activeDayData = schedule.find((d) => d.day === activeDay) ?? schedule[0];
  const isRTL = lang === 'ar';

  const classTypes: ClassType[] = ['pilates', 'yoga', 'aerial-yoga'];

  const dayNames = DAYS.map((d) => (isRTL ? d.ar : d.en));
  const classLabels = classTypes.map((t) => (isRTL ? CLASS_LABELS[t].ar : CLASS_LABELS[t].en));

  return (
    <section
      id="schedule"
      className="py-16 px-4 bg-gradient-to-b from-brand-50 to-white"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand mb-2">
            {isRTL ? 'الجدول الزمني' : 'Schedule'}
          </h2>
          <p className="text-brand-light">
            {isRTL ? 'احجز حصتك الآن' : 'Book your class now'}
          </p>
        </motion.div>

        {/* Class Type Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-6 flex-wrap"
        >
          {classTypes.map((type) => (
            <button
              key={type}
              onClick={() => {
                setActiveClass(type);
                const firstAvailable = buildSchedule(type)[0];
                setActiveDay(firstAvailable?.day ?? 'mon');
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeClass === type
                  ? 'bg-brand text-white shadow-md'
                  : 'bg-white text-brand border border-brand-200 hover:border-brand'
              }`}
            >
              {isRTL ? CLASS_LABELS[type].ar : CLASS_LABELS[type].en}
            </button>
          ))}
        </motion.div>

        {/* Day Tabs — horizontal scroll on mobile */}
        <div className="mb-8 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-2 min-w-max">
            {schedule.map((dayData) => {
              const dayInfo = DAYS.find((d) => d.key === dayData.day)!;
              const label = isRTL ? dayInfo.ar : dayInfo.en;
              return (
                <button
                  key={dayData.day}
                  onClick={() => setActiveDay(dayData.day)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    activeDay === dayData.day
                      ? 'bg-brand text-white'
                      : 'bg-white text-brand border border-brand-200 hover:bg-brand-50'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Slots Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeClass}-${activeDay}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {activeDayData.slots.map((slot) => {
              const dayInfo = DAYS.find((d) => d.key === activeDay)!;
              const dayLabel = isRTL ? dayInfo.ar : dayInfo.en;
              const classLabel = isRTL
                ? CLASS_LABELS[activeClass].ar
                : CLASS_LABELS[activeClass].en;

              if (slot.fullyBooked) {
                return (
                  <motion.div
                    key={slot.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-brand-50 rounded-xl p-4 flex flex-col gap-3 opacity-60 cursor-not-allowed"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-brand">{slot.time}</span>
                      <span className="text-xs bg-brand-100 text-brand px-2 py-0.5 rounded-full">
                        {isRTL ? 'ممتلئ' : 'Full'}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-brand">{classLabel}</p>
                      <p className="text-sm text-brand-light">{slot.instructor}</p>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-xs text-brand-light">
                        {slot.spotsLeft}/{slot.maxSpots} {isRTL ? 'المتاح' : 'spots'}
                      </span>
                    </div>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={slot.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -2 }}
                  className="bg-white rounded-xl p-4 flex flex-col gap-3 shadow-sm border border-brand-100"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-brand">{slot.time}</span>
                    <span className="text-xs bg-brand-100 text-brand px-2 py-0.5 rounded-full font-medium">
                      {LEVELS[lang]}
                    </span>
                  </div>

                  <div>
                    <p className="font-medium text-brand">{classLabel}</p>
                    <p className="text-sm text-brand-light">{slot.instructor}</p>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xs text-brand-light">
                      {slot.spotsLeft}/{slot.maxSpots} {isRTL ? 'المتاح' : 'spots'}
                    </span>

                    <a
                      href={getWhatsAppLink(classLabel, dayLabel, slot.time)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-medium px-3 py-1.5 rounded-full transition-colors"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-3.5 h-3.5 fill-current"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      {isRTL ? 'احجز' : 'Book'}
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Private Sessions Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-brand-light mt-8"
        >
          {isRTL
            ? 'جلسات خاصة متاحة — تواصل معنا عبر واتساب'
            : 'Private sessions available — Contact us via WhatsApp'}
        </motion.p>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

import Hero from '@/components/Hero'
import AboutSection from '@/components/sections/AboutSection'
import ClassesSection from '@/components/sections/ClassesSection'
import InstructorsSection from '@/components/sections/InstructorsSection'
import ScheduleSection from '@/components/sections/ScheduleSection'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ClassesSection />
      <InstructorsSection />
      <ScheduleSection />
    </>
  )
}
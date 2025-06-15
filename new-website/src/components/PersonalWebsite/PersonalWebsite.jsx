import React, { useState } from 'react'
import DarkModeToggle from './DarkModeToggle'
import VisitMessage from './VisitMessage'
import Constellation from './Constellation'
import SectionWrapper from './SectionWrapper'
import ResearchSection from './ResearchSection'
import PublicationsSection from './PublicationsSection'
import ExperienceSection from './ExperienceSection'
import GallerySlider from './GallerySlider'
import Footer from './Footer'
import useVisitCount from '../../hooks/useVisitCount'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import useMousePosition from '../../hooks/useMousePosition'
import { Mail, Linkedin, Github, BookOpen } from 'lucide-react'

const PersonalWebsite = () => {
  const visitCount = useVisitCount()
  const isVisible = useIntersectionObserver()
  const { pos, handleMouseMove, handleMouseLeave } = useMousePosition()
  const [dark, setDark] = useState(false)

  return (
    <div className={`${dark ? 'bg-black text-white' : 'bg-white text-black'}`}>      
      {/* <DarkModeToggle isDark={dark} toggle={() => setDark(!dark)} />
      <VisitMessage count={visitCount} isDark={dark} />
      <Constellation isDark={dark} /> */}

      <header id="header">
        <p>Header placeholder</p>
      </header>

      {/* <SectionWrapper id="research" isVisible={isVisible.research} pos={pos} mouseHandlers={{ handleMouseMove, handleMouseLeave }}>
        <ResearchSection data={[]} />
      </SectionWrapper>

      <SectionWrapper id="publications" isVisible={isVisible.publications} pos={pos} mouseHandlers={{ handleMouseMove, handleMouseLeave }}>
        <PublicationsSection data={[]} />
      </SectionWrapper>

      <SectionWrapper id="experience" isVisible={isVisible.experience} pos={pos} mouseHandlers={{ handleMouseMove, handleMouseLeave }}>
        <ExperienceSection data={[]} />
      </SectionWrapper>

      <GallerySlider images={[]} />

      <Footer /> */}
    </div>
  )
}

export default PersonalWebsite
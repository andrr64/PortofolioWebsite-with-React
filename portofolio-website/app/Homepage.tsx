import React from 'react'
import LayoutWithNavFoot from './components/PageWrapperWithNav'
import HeroSection from './sections/Hero'
import ExperienceSection from './sections/Experiences'
import ProjectsSection from './sections/Projects'

export default function Homepage() {
    return (
        <LayoutWithNavFoot>
            <HeroSection />
            <ExperienceSection />
            <ProjectsSection />
        </LayoutWithNavFoot>
    )
}

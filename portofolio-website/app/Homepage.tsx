import React from 'react'
import LayoutWithNavFoot from './components/PageWrapperWithNav'
import HeroSection from './sections/Hero'
import ProjectsSection from './sections/Projects'
import ExperienceSection from './sections/Experience'

export default function Homepage() {
    return (
        <LayoutWithNavFoot>
            <HeroSection />
            <ExperienceSection />
            <ProjectsSection />
        </LayoutWithNavFoot>
    )
}

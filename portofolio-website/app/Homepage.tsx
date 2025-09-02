import React from 'react'
import LayoutWithNavFoot from './components/PageWrapperWithNav'
import HeroSection from './sections/Hero'
import ProjectsSection from './sections/Projects'
import ExperienceSection from './sections/Experience'
import CertificatesSection from './sections/Achievements'

export default function Homepage() {
    return (
        <LayoutWithNavFoot>
            <HeroSection />
            <div className='py-16 flex bg-gray-100 dark:bg-gray-800 flex-col space-y-20 '>
                <ExperienceSection />
                <ProjectsSection />
                <CertificatesSection />
            </div>
        </LayoutWithNavFoot>
    )
}

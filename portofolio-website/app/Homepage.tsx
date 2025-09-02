'use client';

import React, { useEffect } from 'react'
import LayoutWithNavFoot from './components/PageWrapperWithNav'
import HeroSection from './sections/Hero'
import ProjectsSection from './sections/Projects'
import ExperienceSection from './sections/Experience'
import CertificatesSection from './sections/Achievements'
import AOS from "aos";

export default function Homepage() {

    useEffect(() => {
        AOS.init({ duration: 800, easing: "ease-out", once: true });
    }, []);

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

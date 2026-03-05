"use client";

import React from 'react'
import LayoutWithNavFoot from '@/components/layout/PageWrapperWithNav'
import HeroSection from '@/components/sections/Hero'
import ProjectsSection from '@/components/sections/Projects'
import ExperienceSection from '@/components/sections/Experience'
import CertificatesSection from '@/components/sections/Achievements'

export default function Homepage() {

    return (
        <LayoutWithNavFoot>
            <HeroSection />
            <ExperienceSection />
            <ProjectsSection />
            <CertificatesSection />
        </LayoutWithNavFoot>
    )
}

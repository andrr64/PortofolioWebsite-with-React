import React from 'react'
import LayoutWithNavFoot from '../components/PageWrapperWithNav'
import ProjectsPage from './ProjectsPage'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects - Andreas",
};

export default function Page() {
  return (
    <LayoutWithNavFoot>
        <ProjectsPage/>
    </LayoutWithNavFoot>
  )
}

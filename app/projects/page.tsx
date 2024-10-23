import Image from 'next/image'
import { Suspense } from 'react'
import ProjectsCards from '../components/projects/projectCards'
import { SkeletonCards } from '../components/ui/skeletons'

// const projects = [
//   { id: 1, title: 'Project 1', description: 'A brief description of project 1. Explain what it does and the technologies used.' },
//   { id: 2, title: 'Project 2', description: 'A brief description of project 2. Explain what it does and the technologies used.' },
//   { id: 3, title: 'Project 3', description: 'A brief description of project 3. Explain what it does and the technologies used.' },
//   { id: 4, title: 'Project 4', description: 'A brief description of project 4. Explain what it does and the technologies used.' },
//   { id: 5, title: 'Project 5', description: 'A brief description of project 5. Explain what it does and the technologies used.' },
//   { id: 6, title: 'Project 6', description: 'A brief description of project 6. Explain what it does and the technologies used.' },
// ]

export default function Projects() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>
        <Suspense fallback={<SkeletonCards />}>
            <ProjectsCards />
        </Suspense>
      </div>
    </section>
  )
}
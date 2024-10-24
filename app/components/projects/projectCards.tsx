import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { getProjects } from '@/app/firebase/actions'
import Image from 'next/image'
import Link from 'next/link'
import MarkdownViewer from '../markdown-viewer/markdown'


const ProjectsCards = async () => {
    const projects = await getProjects()
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project) => (
                <Link href={`/projects/${project.id}`}>
                    <Card key={project.id}>
                        <CardHeader>
                            <Image
                                src={project.projectImageUrl}
                                alt={project.projectName}
                                width={300}
                                height={200}
                                priority={false}
                                loading='lazy'
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="mb-2">{project.projectName}</CardTitle>
                            <p className="text-gray-600">{project.projectShortDesc}</p>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>

    )
}

export default ProjectsCards
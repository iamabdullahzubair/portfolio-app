

import { getProjects } from '@/app/firebase/actions'
import React from 'react'

type Props = {}

const Projects = async (props: Props) => {
    const projects = await getProjects()
    return (
        <div>
            <h2 className="text-3xl font-bold mb-4">My Projects</h2>
            {/* Display projects here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Replace with project data */}
                {projects.map(project =>
                    <div key={project.id} className="bg-white p-4 shadow rounded-lg">
                        <h3 className="text-xl font-semibold">{project.projectName}</h3>
                        {/* <p className="text-gray-600">{project.description}</p> */}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Projects
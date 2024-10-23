import MarkdownViewer from '@/app/components/markdown-viewer/markdown';
import { getProject } from '@/app/firebase/actions'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaCode } from 'react-icons/fa';
import { IoNavigate } from 'react-icons/io5';


const Page = async ({ params }: { params: { id: string } }) => {
    const { id } = params
    const project = await getProject(id)

    if (project) {


        return (
            <div className="container mx-auto py-4 px-6">

                <h1 className="sm:text-4xl text-2xl font-bold mb-6 text-center">{project?.projectName}</h1>
                {/* Project Image */}
                <div className="relative h-56 sm:h-96 px-5">
                    <Image
                        src={project.projectImageUrl}
                        alt={project.projectName}
                        layout="fill"
                        style={{ objectFit: 'cover' }}
                        className="w-full h-full rounded-t-lg" // Removed object-cover since it's now inline style
                    />
                    <div className='absolute bottom-1 right-2 flex gap-2 sm:flex-row flex-col'>
                        <a href={project?.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" flex gap-2 items-center bg-gray-200 text-blue-800 py-2 px-3 rounded transition-colors duration-300 hover:bg-gray-500 hover:text-gray-100"
                        >
                            <IoNavigate />
                            <p className='hidden sm:block'>Visit Project</p>

                        </a>
                        <a href={project?.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" flex items-center gap-1 bg-gray-200 text-gray-800 py-2 px-3 rounded transition-colors duration-300 hover:bg-gray-500 hover:text-gray-100"
                        >
                            <FaCode />
                            <p className='hidden sm:block'>
                                Source Code
                            </p>

                        </a>
                    </div>
                </div>



                {/* Project Content */}
                <div className="sm:p-8 p-4">
                    {/* Project Name */}
                    <h3 className="text-xl text-gray-400 font-bold mb-4">Details of Project</h3>

                    {/* Project Description */}
                    <MarkdownViewer content={project?.description} />

                    {/* Project URL */}

                </div>

            </div>
        );
    }
}

export default Page
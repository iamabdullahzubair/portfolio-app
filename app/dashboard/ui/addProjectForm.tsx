'use client'
import React, { useState } from 'react'

import { addProject, uploadImage } from '@/app/firebase/actions';
import LoadingOverlay from '../../components/ui/loadingOverlay';
import { useRouter } from 'next/navigation';
import GenerateDescription from '../component/generate-with-ai/generate-description';
import { generateDescriptionWithCohere } from '../component/generate-with-ai/action';
import MarkdownViewer from '@/app/components/markdown-viewer/markdown';


const AddProjectForm = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [desc, setDesc] = useState<string>('')
    const [showGenerateModal, setShowGenerateModal] = useState(false)

    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget); // Type-safe way to access form

        // Convert formData to an object
        const data: Record<string, FormDataEntryValue | string> = {}; // Record for key-value pairs



        let projectImageFile: File | null = null; // To store the image file

        formData.forEach((value, key) => {
            if (!value) {
                alert("All fields are required");
                return;
            }

            // Handling image file
            if (key === "projectImages") {
                const file = value as File; // Explicitly cast value to File

                if (!file || file.size === 0) {
                    alert("Please upload a project image.");
                    return;
                }
                projectImageFile = file; // Store the file for later upload
            } else {
                data[key] = value;
            }
        });

        try {
            setLoading(true)
            if (!projectImageFile) {
                alert("Image is required.");
                return;
            }

            // Upload the project image to Firebase and get the download URL
            const projectImageUrl = await uploadImage(projectImageFile);

            // Add the image URL to the form data
            data.projectImageUrl = projectImageUrl;

            // Submit the project data to Firestore
            const projectData = {
                projectName: data.projectName as string,
                projectShortDesc: data.projectShortDesc as string,
                description: data.description as string,
                projectUrl: data.projectUrl as string,
                githubUrl: data.githubUrl as string,
                projectImageUrl: projectImageUrl // Use the URL from Firebase storage
            };

            await addProject(projectData);
            router.push("/dashboard")
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to submit the form. Please try again.");
        }
        finally {
            setLoading(false)
        }
    };

    const handleGenerateDescription = async (projectName: string, techStack: string) => {
        const desc = await generateDescriptionWithCohere(projectName, techStack)
        console.log(desc)

    }

    return (
        <div>
            {loading && <LoadingOverlay />}
            {showGenerateModal && <GenerateDescription onClose={() => setShowGenerateModal(false)} onGenerate={handleGenerateDescription} show />}
            <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded-lg">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Project Name</label>
                    <input
                        type="text"
                        name="projectName" // Add name attribute
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        placeholder="Enter project name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Short Description </label>
                    <input
                        type="text"
                        name="projectShortDesc" // Add name attribute
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        placeholder="Enter project name"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Project URL</label>
                    <input
                        type="text"
                        name="projectUrl" // Add name attribute
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        placeholder="Enter project URL"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Github URL</label>
                    <input
                        type="text"
                        name="githubUrl" // Add name attribute
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        placeholder="Enter Github URL"
                    />
                </div>
                <div className="mb-4">
                    <span className='flex gap-5 items-center'>
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <button
                            type='button'
                            className='bg-blue-400 rounded px-4 py-1 text-sm text-gray-700'
                            onClick={() => setShowGenerateModal(true)}>Generate with AI</button>
                    </span>
                    <textarea
                        name="description" // Add name attribute
                        className="mt-1 block w-full border h-48 border-gray-300 rounded-md shadow-sm p-2"
                        placeholder="Enter project description"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    {/* preview */}
                    {desc && <> <p className='text-xs text-gray-400 mt-4 mb-2 ml-2'>** Preview of Description ** </p>
                        <div className='bg-gray-100 px-4 py-2 rounded '>
                            <MarkdownViewer content={desc} />
                        </div> </>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Upload Project Images</label>
                    <input
                        type="file"
                        name="projectImages" // Add name attribute
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
                <button type='submit' className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Add Project
                </button>
            </form>

        </div>
    )
}

export default AddProjectForm
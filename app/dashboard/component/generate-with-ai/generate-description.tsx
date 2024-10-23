'use client'

import React, { useState } from 'react'

type prop = { show: boolean, onClose: () => void, onGenerate: (projectName: string, techStack: string) => void }

const GenerateDescription = ({show, onClose, onGenerate} : prop) => {
    const [projectName, setProjectName] = useState('');
    const [techStack, setTechStack] = useState('');

    if (!show) return null;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onGenerate(projectName, techStack);
        onClose();  // Close the modal after submitting
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Generate Project Description with AI</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Project Name</label>
                        <input
                            type="text"
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            placeholder="Enter project name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Tech Stack</label>
                        <input
                            type="text"
                            value={techStack}
                            onChange={(e) => setTechStack(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            placeholder="Enter tech stack (e.g., React, Firebase)"
                            required
                        />
                    </div>
                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            className="bg-gray-300 px-4 py-2 rounded-lg"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                            Generate
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default GenerateDescription



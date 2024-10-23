

import AddProjectForm from '@/app/dashboard/ui/addProjectForm'
import React from 'react'
import GenerateDescription from '../component/generate-with-ai/generate-description'

type Props = {}

const AddProject = (props: Props) => {
  return (
    <>
        <h2 className="text-3xl font-bold mb-4">Add New Project</h2>
        <AddProjectForm />
    </>
  )
}

export default AddProject
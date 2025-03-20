import React from 'react'
import Project_Head from '../Project_Components/Project_Head'
import Project_Section from '../Project_Components/Project_Section'

const Projects = () => {
  return (
    <>
      <div className='bg-black py-5'>
        <Project_Head/>

        <div className='text-center py-6'>
          <span className='text-1xl text-green-500'>These are my Projects</span>
        </div>


        <Project_Section/>

      </div>
    </>
  )
}

export default Projects

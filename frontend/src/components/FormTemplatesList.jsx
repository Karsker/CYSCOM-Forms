import React from 'react'
import { Link } from 'react-router-dom'
import NewFormPlate from './NewFormPlate'
const FormTemplatesList = () => {
  return (
    <div className='w-screen h-[250px] bg-slate-100 flex items-center justify-center text-lg'>
        <a href='http://localhost:5173/newform' target="_blank">
            <NewFormPlate />
        </a>
    </div>
  )
}

export default FormTemplatesList
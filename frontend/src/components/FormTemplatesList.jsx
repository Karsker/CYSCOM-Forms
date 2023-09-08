import React from 'react'
import { Link } from 'react-router-dom'
import NewFormPlate from './NewFormPlate'
const FormTemplatesList = () => {
  return (
    <div className='w-screen h-[250px] bg-slate-100 flex items-center justify-center text-lg'>
        <Link to='/newform'>
            <NewFormPlate />
        </Link>
    </div>
  )
}

export default FormTemplatesList
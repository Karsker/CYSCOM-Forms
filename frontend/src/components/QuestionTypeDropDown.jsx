import React from 'react'

const QuestionTypeDropDown = ({  setQuesType }) => {
  return (
    
    
    <select id='type-button' className='bg-slate-200 rounded-lg w-40 h-10 p-2 peer' onChange={(e) => setQuesType(e.target.value)}>
      <option className='bg-white' value='text'>Text</option>
      <option className='bg-white' value='multi-choice'>Multiple Choice</option>
      <option className='bg-white' value='check-boxes'>Checkboxes</option>
    </select>
  )
}

export default QuestionTypeDropDown
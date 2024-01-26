import React from 'react'

const TextBlock = ({ details, editField, quesId }) => {
  return (
    <div>
      <input type="text" value={details['question']} className='bg-transparent text-xl border-none outline-none' onChange={(e) => editField(e.target.value, null, null, quesId)}></input>
    </div>
  )
}

export default TextBlock
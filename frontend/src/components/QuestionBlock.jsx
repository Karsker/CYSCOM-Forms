import React from 'react'



const QuestionBlock = ({ details , editField, quesId, handleDelete}) => {
    console.log(details);
    
    return (
        <div className="relative flex text-black flex-col px-4 py-4 my-1 header w-[750px] bg-white h-[150px] rounded-md">
             <input type="text" value={details['question']} className='bg-transparent text-xl border-none outline-none' onChange={(e) => editField(e.target.value, null, null, quesId)}></input>
             {/* <input type="text" value='' className='border-y-2 bg-transparent text-2xl outline-none' onChange={(e) => editField(e.target.value, null, null, quesId)}></input> */}
             <button className='absolute right-2 bottom-2 text-white text-sm bg-red-400 hover:bg-red-600 rounded-md px-3 py-2' onClick={() => handleDelete(quesId)}>Delete</button>
        </div>
        
    )
}

export default QuestionBlock
import React from 'react'
import QuestionTypeDropDown from './QuestionTypeDropDown';
import { useState } from 'react';
import MultipleChoiceBlock from './MultipleChoiceBlock';
const QuestionBlock = ({ details, editField, quesId, handleDelete }) => {

    const [quesType, setQuesType] = useState('text');
    console.log(quesType);
    return (
        <div className="relative flex text-black flex-col px-4 py-4 my-1 header w-[750px] bg-white min-h-[150px] h-fit max-h-fit rounded-md">
            {quesType==='text' && <input type="text" value={details['question']} className='bg-transparent text-xl border-none outline-none' onChange={(e) => editField(e.target.value, null, null, quesId)}></input>}
            {quesType==='multi-choice' && <MultipleChoiceBlock quesId={quesId}/>}
            {/* <input type="text" value='' className='border-y-2 bg-transparent text-2xl outline-none' onChange={(e) => editField(e.target.value, null, null, quesId)}></input> */}
            <button className='absolute right-2 bottom-12 text-white text-sm bg-red-400 hover:bg-red-600 rounded-md px-3 py-2' onClick={() => handleDelete(quesId)}>Delete</button>
            <label className="absolute bottom-2 right-2 inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer"></input>
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-black after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-300"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 ">Required</span>
            </label>
            <div className='absolute right-2 bottom-24'>
                <QuestionTypeDropDown setQuesType={setQuesType}/>
            </div>
           
        </div>

    )
}

export default QuestionBlock
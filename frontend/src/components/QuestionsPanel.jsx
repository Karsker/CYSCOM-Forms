import React from 'react'
import QuestionBlock from './QuestionBlock'
const QuestionsPanel = ({ formProps, formChange, fieldChange, addQuestion, handleDelete }) => {
    return (
        <div className='flex flex-col items-center'>
            <div className="flex text-white flex-col px-4 py-4 header w-[750px] bg-blue-400 h-[120px] rounded-md">
                <input type="text" value={formProps['title']} className='bg-transparent text-2xl border-none outline-none' onChange={(e) => formChange(e.target.value, null, null)}></input>
                <input type="text" value={formProps['description']} className='bg-transparent text-sm border-none outline-none' onChange={(e) => formChange(null, e.target.value, null)}></input>
            </div>
            {formProps['fields'].map((ques, index) => {
                return <QuestionBlock key={index} details={ques} editField={ fieldChange } quesId={index} handleDelete={handleDelete}/>
            })}  
            <button className='bg-yellow-400 px-4 py-2 my-2 rounded-md hover:bg-yellow-500' onClick={() => addQuestion()}>Add</button>          
        </div>
    )
}

export default QuestionsPanel
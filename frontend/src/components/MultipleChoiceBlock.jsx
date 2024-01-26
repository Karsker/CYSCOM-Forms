import React from 'react'
import MultipleChoiceField from './MultipleChoiceField'
import { useState } from 'react';

const MultipleChoiceBlock = ( {quesId} ) => {
    
    const [desc, setDesc] = useState({
        ques:'Question',
        choices:['Choice 1'],
        choice:0
    });
    // console.log(desc);
    function handleQuesChange (ques) {
        let newDesc = {...desc};
        newDesc['ques'] = ques;
        setDesc(newDesc);
    };

    function handleAddChoice() {
        let newDesc = {...desc};
        const len = newDesc['choices'].length;
        newDesc['choices'].push(`Choices-${len+1}`);
        setDesc(newDesc);
    }

    function handleDeleteChoice(choiceId) {
        let newDesc = {...desc};
        newDesc['choices'].splice(choiceId, 1);
        setDesc(newDesc);
    }


    return (
        <div>
            <input className='bg-transparent text-xl border-none outline-none w-full' value={desc['ques']} onChange = {(e) => handleQuesChange(e.target.value)}/>
            {desc['choices'].map((e, index) => {
                return (
                <div className='flex gap-2 space-around items-center' key={index}>
                    <MultipleChoiceField  nameVal = {quesId} choiceNumber={index}/>
                    <button className='bg-black text-white h-5 w-5 text-sm my-2 rounded-full' onClick={() => handleDeleteChoice(index)}>X</button>
                </div>)
            })}
            <button className='bg-black px-3 py-1 text-white rounded-sm my-2' onClick = {() => handleAddChoice()}>Add choice</button>
        </div>
    )
}

export default MultipleChoiceBlock
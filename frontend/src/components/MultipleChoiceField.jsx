import React from 'react'
import { useState } from 'react'

const MultipleChoiceField = ({ nameVal, choiceNumer }) => {
    
    const [value, setValue] = useState(`Choice ${choiceNumer}`);
    console.log(nameVal);
    return (
        <div>
            <input type="radio" className='border-2 border-black' value={value} name={`ques-${nameVal}`}/>
            <input type="text" className='bg-transparent mx-2 border-none outline-none' value={value} onChange={() => setValue(event.target.value)} />
        </div>
    )
}

export default MultipleChoiceField
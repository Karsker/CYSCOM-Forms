import React from 'react'
import { useState } from 'react';
const CheckBoxField = ( { nameVal, choiceNumber } ) => {
    const [value, setValue] = useState(`Choice ${choiceNumber}`);
    console.log(choiceNumber);
    return (
        <div>
            <input type="checkbox" className='border-2 border-black' value={value} name={`ques-${nameVal}`} />
            <input type="text" className='bg-transparent mx-2 border-none outline-none' value={value} onChange={() => setValue(event.target.value)} />
        </div>
    )
}

export default CheckBoxField
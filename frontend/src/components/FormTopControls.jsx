import React from 'react'
import { useState } from 'react'
const FormTopControls = () => {
    const [tabColors, setTabColors] = useState(['text-blue-700', 'text-black', 'text-black']);
    console.log(tabColors[0]);
    return (
        <div className='flex w-full justify-center gap-x-5 my-4 text-md'>
            <button onClick={() => setTabColors(['text-blue-700', 'text-black', 'text-black'])}><div className={tabColors[0]}>Questions</div></button>
            <button onClick={() => setTabColors(['text-black', 'text-blue-700', 'text-black'])}><div className={tabColors[1]}>Responses</div></button>
            <button onClick={() => setTabColors(['text-black', 'text-black', 'text-blue-700'])}><div className={tabColors[2]}>Settings</div></button>
        </div>
    )
}

export default FormTopControls
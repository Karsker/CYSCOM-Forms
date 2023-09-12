import React from 'react'
import FormTopBar from '../components/FormTopBar'
import FormTopControls from '../components/FormTopControls'
import QuestionsPanel from '../components/QuestionsPanel'
import QuestionBlock from '../components/QuestionBlock'
import { useState } from 'react'

const NewForm = () => {
	const [properties, setProperties] = useState({title:'New Form', description: 'Blank form', fields: [
	]});
	const [tabColors, setTabColors] = useState(['text-blue-300', 'text-white', 'text-white']);
	function handleChange(title, description, fields) {
		if (title != null) {
			let newState = {...properties};
			newState['title'] = title;
			setProperties(newState);
			console.log('Value updated');
			console.log(properties);
		} 
		if (description != null) {
			let newState = {...properties};
			newState['description'] = description;
			setProperties(newState);
			console.log('Value updated');
			console.log(properties);
		}
	}
	function editField(question, required, type, ind) {
		if (question != null) {
			let newState = {...properties};
			newState['fields'][ind]['question'] = question;
			setProperties(newState);
			console.log('Form updated');
		}
		
	}

	function addQuestion() {
		let newState = {...properties};
		newState['fields'].push({
			question: 'Question',
			required: true,
			type: 'text'
		});
		setProperties(newState);
	}
	function handleDelete(quesId) {
		let newState = {...properties};
		newState['fields'].splice(quesId,1);
		setProperties(newState);
	}

	return (
		<div className='font-poppins flex flex-col items-center bg-[#f0ebf8] h-screen overflow-y-auto overflow-x-hidden'>
			<div className='z-10 fixed top-0 left-0 w-full'>
			<FormTopBar />
				<div className='flex justify-center gap-x-5 text-md bg-[#191919] py-2'>
					<button onClick={() => setTabColors(['text-blue-300', 'text-white', 'text-white'])}><div className={tabColors[0]}>Questions</div></button>
					<button onClick={() => setTabColors(['text-white', 'text-blue-300', 'text-white'])}><div className={tabColors[1]}>Responses</div></button>
					<button onClick={() => setTabColors(['text-white', 'text-white', 'text-blue-300'])}><div className={tabColors[2]}>Settings</div></button>
				</div>
			</div>
			<div className='relative top-[150px]'>
				{tabColors[0] == 'text-blue-300'?(<QuestionsPanel formProps={properties} formChange={handleChange} fieldChange={editField} addQuestion={addQuestion} handleDelete={handleDelete}/>):''}

			</div>
			
		</div>
	)
}

export default NewForm
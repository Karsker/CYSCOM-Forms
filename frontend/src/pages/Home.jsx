import React from 'react'
import Navbar from '../components/Navbar';
import FormTemplatesList from '../components/FormTemplatesList';
const Home = () => {
	console.log('Home page loaded');
	return (
		<div className='font-poppins'>
			<Navbar />
			
			<FormTemplatesList />
		</div>
	)
}

export default Home
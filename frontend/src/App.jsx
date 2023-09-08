import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NewForm from './pages/NewForm'
const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />}/>
			<Route path='/newform' element={<NewForm />} />
		</Routes>
	);
}
export default App
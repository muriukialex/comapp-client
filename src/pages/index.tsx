import { Routes, Route, Navigate } from 'react-router-dom'
import Clients from './Clients'
import Projects from './Projects'
import NotFound from './NotFound'

const Pages = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='clients' />} />
			<Route path='/clients' element={<Clients />} />
			<Route path='/projects' element={<Projects />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

export default Pages

import './App.sass'
import Navbar from './components/Navbar'
import Sidebar from './components/SideBar'
import Pages from './pages'

const App = () => {
	return (
		<div className='App'>
			<Navbar />
			<div className='App__Container'>
				<Sidebar />
				<div className='App__Container--pages'>
					<Pages />
				</div>
			</div>
		</div>
	)
}

export default App

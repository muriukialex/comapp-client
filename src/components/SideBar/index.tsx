import './styles.sass'
import { NavLink } from 'react-router-dom'
import NavLinks from '@/utils/NavigationLinks/navlinks'
import { BsFillPeopleFill } from 'react-icons/bs'
import { IoIosConstruct } from 'react-icons/io'

const Sidebar = () => {
	return (
		<div className='Sidebar'>
			<ul className='Sidebar__Link'>
				{NavLinks.map(link => (
					<NavLink to={link.path}>
						<li key={link.id} className='Sidebar__Link--ListItem'>
							{link.path === '/clients' ? <BsFillPeopleFill /> : <IoIosConstruct />}
							{link.title}
						</li>
					</NavLink>
				))}
			</ul>
		</div>
	)
}

export default Sidebar

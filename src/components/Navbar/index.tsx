import './styles.sass'
import { useTranslation } from 'react-i18next'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
	const { t } = useTranslation('navbar')
	return (
		<nav className='NavBar'>
			<h1>
				<NavLink to='clients' className='NavBar__Header--Title'>
					<AiOutlineFundProjectionScreen /> {t('dashboard')}
				</NavLink>
			</h1>
		</nav>
	)
}

export default Navbar

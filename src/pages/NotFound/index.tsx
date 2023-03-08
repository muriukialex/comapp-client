import './styles.sass'
import { useTranslation } from 'react-i18next'
import NotFoundImage from '../../assets/NotFound.svg'

const NotFound = () => {
	const { t } = useTranslation('not-found')
	return (
		<div className='NotFound'>
			<img src={NotFoundImage} alt={'page not found'} width='100%' height='100%' />
			<div className='NotFound__Text'>{t('title')}</div>
		</div>
	)
}

export default NotFound

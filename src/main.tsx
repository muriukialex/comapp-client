import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.sass'
import { BrowserRouter } from 'react-router-dom'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
const availableLanguages = ['en', 'sw']

i18n.use(Backend)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		supportedLngs: availableLanguages,
		interpolation: {
			escapeValue: false,
		},
	})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
)

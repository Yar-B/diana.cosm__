import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import ErrorSizePage from './pages/ErrorSizePage'
import FirstPage from './pages/FirstPage'
import PriceListFirstPage from './pages/PriceListFirstPage'
import SecondPage from './pages/SecondPage'

function App() {
	const [clientWindowSize, setClientWindowSize] = useState(0)
	window.addEventListener('resize', () => {
		setClientWindowSize(document.body.clientHeight / document.body.clientWidth)
	})
	useEffect(() => {
		setClientWindowSize(document.body.clientHeight / document.body.clientWidth)
	}, [])
	return (
		<>
			{clientWindowSize > 1.5 ? (
				<>
					<FirstPage />
					<SecondPage />
					<PriceListFirstPage />
				</>
			) : (
				<>
					<ErrorSizePage />
				</>
			)}
		</>
	)
}

export default App


import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import ContactPage from './pages/ContactPage';
import ErrorSizePage from './pages/ErrorSizePage';
import FirstPage from './pages/FirstPage';
import PriceListPage from './pages/PriceListPage';
import SecondPage from './pages/SecondPage';
import WorkExamplesPage from './pages/WorkExamplesPage';

function App() {
	const [clientWindowSize, setClientWindowSize] = useState(
		document.documentElement.clientHeight / document.documentElement.clientWidth
	);
	window.addEventListener('resize', () => {
		setClientWindowSize(document.body.clientHeight / document.body.clientWidth);
	});
	useEffect(() => {
		setClientWindowSize(document.body.clientHeight / document.body.clientWidth);
	}, []);
	return (
		<>
			{clientWindowSize > 1.5 ? (
				<>
					<FirstPage />
					<SecondPage />
					<PriceListPage />
					<WorkExamplesPage />
					<ContactPage />
				</>
			) : (
				<>
					<ErrorSizePage />
				</>
			)}
		</>
	);
}

export default App;


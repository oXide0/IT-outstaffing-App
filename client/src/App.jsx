import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Analytics from './pages/Analytics';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Main />} />
			<Route path='/analytics' element={<Analytics />} />
		</Routes>
	);
}

export default App;

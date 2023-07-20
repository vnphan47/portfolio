import './App.css';
import './assets/scss/style.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { defaultRouter } from './routes';
import { Header } from './ components/Header';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<Routes>
					{defaultRouter.map((item) => (
						<Route key={item.path} path={item.path} element={item.component} />
					))}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

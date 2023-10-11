import './App.css';
import './assets/scss/style.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { defaultRouter } from './routes';
import { Template } from './HOC/Template';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
	useEffect(() => {
		Aos.init();
	}, []);
	return (
		<div className='App'>
			<BrowserRouter>
				<Template>
					<Routes>
						{defaultRouter.map((item) => (
							<Route key={item.path} path={item.path} element={item.component} />
						))}
					</Routes>
				</Template>
			</BrowserRouter>
		</div>
	);
}

export default App;

import './App.css';
import './assets/scss/style.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { defaultRouter } from './routes';
import { Template } from './HOC/Template';

function App() {
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

import Home from './components/Home';
import Borrow from './components/Borrow';
import AboutUs from './components/AboutUs';
import Message from './components/Message';
import User from './components/User';
import Custom404 from './components/Custom404';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
	return (
		<Router>
			<header>
				<img src="#" alt="logo" />
				<nav>
					<div className="btn-group my-3">
						<Link to="/" className="btn btn-dark">
							Inicio
						</Link>
						<Link to="/about-us" className="btn btn-dark">
							Quiénes Somos
						</Link>
						<Link to="/message" className="btn btn-dark">
							Mensaje
						</Link>
						<Link to="/borrow" className="btn btn-dark">
							Prestar Un Libro
						</Link>
					</div>
				</nav>
			</header>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="home" element={<Home />} />
				<Route path="about-us" element={<AboutUs />} />
				<Route path="about-us/:id" element={<User />} />
				<Route
					path="message"
					element={
						<Message
							name="juan"
							id={123}
							url="https://emma.cuc.edu.co/static/media/logo_cuc.2cabedb7.png"
						/>
					}
				/>
				<Route path="borrow" element={<Borrow />} />
				<Route path="*" element={<Custom404 />} />
			</Routes>

			<footer>

			</footer>

		</Router>
	);
}

export default App;

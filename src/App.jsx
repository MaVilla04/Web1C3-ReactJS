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
			<header className="d-flex justify-content-between px-5 align-items-center shadow mb-5 bg-body-tertiary rounded">
				<div>
					<Link className="navbar-brand fst-italic fw-bolder fs-3 text-danger text-opacity-75" to="/home">
						<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-book-half me-2"
							viewBox="0 0 16 16">
							<path
								d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
						</svg>
						BookLand</Link>
				</div>
				<nav className="navbar navbar-expand-lg ">
					<div className="container-fluid my-1 mx-3">
						<button className="navbar-toggler focus-ring focus-ring-danger" type="button" data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						<div className="navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item"><Link to="/home" className="nav-link">
									Home
								</Link></li>
								<li className="nav-item"><Link to="/about-us" className="nav-link">
									About Us
								</Link></li>
								<li className="nav-item"><Link to="/borrow" className="nav-link">
									Borrow a Book
								</Link></li>
								<li className="nav-item"><Link to="/message" className="nav-link">
									Suggestions
								</Link></li>
							</ul>
						</div>
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

			<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 px-4 mt-5 bg-danger bg-opacity-25">
				<p className="col-12 col-md-4 mb-3 mb-md-0 text-center text-body-secondary">© 2024 BookLand</p>

				<Link to="/"
					className="col-12 col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto text-body-secondary">
					<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-book-half"
						viewBox="0 0 16 16">
						<path
							d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
					</svg>
				</Link>

				<ul className="nav col-12 col-md-4 justify-content-center">
					<li className="nav-item"><Link to="/home" className="nav-link px-2 text-body-secondary">Home</Link></li>
					<li className="nav-item"><Link to="/about-us" className="nav-link px-2 text-body-secondary">About Us
					</Link>
					</li>
					<li className="nav-item"><Link to="/borrow" className="nav-link px-2 text-body-secondary">Borrow a Book</Link></li>
					<li className="nav-item"><Link to="/message" className="nav-link px-2 text-body-secondary">Suggestions</Link>
					</li>
				</ul>
			</footer>


		</Router>
	);
}

export default App;

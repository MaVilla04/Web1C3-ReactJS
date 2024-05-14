import { Link } from "react-router-dom";

function Home({ setUsername, setTopic }) {
  return (
    <main>
      <section className="d-flex justify-content-center align-items-center flex-wrap mx-3 min-vh-100">
        <div className="d-inline col-10 col-sm-5 mx-4">
          <h1 className="text-danger text-opacity-75">Explore infinite worlds in our literary corner!</h1>
          <h2>Discover treasures between pages,</h2>
          <h6>from timeless classics to the latest releases. Immerse yourself in stories that inspire, excite, and transform. Find your next adventure among books that ignite your imagination and nourish your soul.
          </h6>
          <h4>Welcome to an unforgettable journey through words!</h4>
          <Link className="btn btn-danger my-3 mx-5" to="/borrow" role="button">Borrow a Book</Link>
        </div>
        <div className="d-inline col-sm-5 col-md-6 col-lg-4">
          <img src="https://static.vecteezy.com/system/resources/previews/023/654/965/non_2x/vintage-books-with-flowers-watercolor-clipart-ai-generated-free-png.png" className="img-fluid small-image" alt="Section Image" />
        </div>
      </section>
      <section className=" p-5 bg-danger bg-opacity-75">
        <h3 className="text-light fw-bold text-center mb-3">A surprise is waiting for you!</h3>
        <div className="col-md-6 m-auto">
          <div className="input-group ">
            <span className="input-group-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"></path>
              </svg>
            </span>
            <input type="text"
              placeholder="Enter your Name"
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-3 d-flex flex-wrap gap-3 justify-content-center">
          <label className="col-12  text-center text-light fw-semibold">Select a Topic</label>
          <Link className="btn btn-outline-light" to="/message" role="button" onClick={() => setTopic('Fantasy')}>Fantasy</Link>
          <Link className="btn btn-outline-light" to="/message" role="button" onClick={() => setTopic('Romance')}>Romance</Link>
          <Link className="btn btn-outline-light" to="/message" role="button" onClick={() => setTopic('Horror')}>Horror</Link>
        </div>
      </section>
    </main>
  )
}

export default Home;
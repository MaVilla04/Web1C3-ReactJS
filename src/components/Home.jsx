import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="d-flex justify-content-center align-items-center flex-wrap mx-3" style={{ minHeight: 780 }}>
        <div className="d-inline col-10 col-sm-5 mt-4 mx-4">
          <h1 className="text-danger text-opacity-75">Explore infinite worlds in our literary corner!</h1>
          <h2>Discover treasures between pages,</h2>
          <h6>from timeless classics to the latest releases. Immerse yourself in stories that inspire, excite, and transform. Find your next adventure among books that ignite your imagination and nourish your soul.
          </h6>
          <h4 className="mb-0">Welcome to an unforgettable journey through words!</h4>
          <Link className="btn btn-danger my-3 mx-5" to="/borrow" role="button">Borrow a Book</Link>
        </div>
        <div className="d-inline col-sm-5 col-md-6 col-lg-4">
          <img src="https://static.vecteezy.com/system/resources/previews/023/654/965/non_2x/vintage-books-with-flowers-watercolor-clipart-ai-generated-free-png.png" className="img-fluid small-image" alt="Section Image" />
        </div>
      </section>
    </main>
  )
}

export default Home;
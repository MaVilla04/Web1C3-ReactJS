import { Link } from "react-router-dom";

function Custom404() {
  return (
    <section className="container my-5 min-vh-100">
      <div className="container d-flex flex-wrap align-items-center justify-content-center px-5 bg-body-tertiary rounded-3 " >
        <img src="src/assets/404.png" alt="404 image" className="bi mt-4 mb-3 img-fluid col-12 col-lg-5" />
        <div className="text-center col-lg-7">
          <h1 className="text-danger text-opacity-75">404</h1>
          <p className="col-lg-8 mx-auto fs-5 text-muted">
            Ups! It seems that you got lost...
          </p>
          <div className="d-inline-flex gap-2 mb-5">
            <Link className="btn btn-danger my-3" to="/home" role="button">Return to Home</Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Custom404
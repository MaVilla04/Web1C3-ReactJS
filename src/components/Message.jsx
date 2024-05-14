
function Message({ user, topic }) {
  return (
    <main className="min-vh-100">
      <h3 className="text-center px-3">Hi, {user}! This is our recommendation for you.</h3>
      <section className="d-flex justify-content-center align-items-center flex-wrap mx-3">
        <div>
          <ul className='list-group list-group-flush'>
            {
              topic.map((book) => (
                <li
                  className='list-group-item d-flex align-items-center'
                  key={book.id}>
                  <span className='text-decoration-none link-danger link-opacity-75' > {book.title} - {book.author}</span>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='d-inline col-8 col-sm-5 col-md-4' style={{ maxWidth: "1024px" }}>
          <img src="https://img.freepik.com/vector-premium/pintura-acuarela-vectorial-carta-amor-llena-flores_870123-257.jpg" alt="img-employess" className="img-fluid small-image" />
        </div>
      </section>
    </main>
  )
}

export default Message
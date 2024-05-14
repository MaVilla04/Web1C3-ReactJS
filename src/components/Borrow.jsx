import { useState } from "react";

function Borrow() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [book, setBook] = useState('');
  const [autor, setAutor] = useState('');
  const [publisher, setPublisher] = useState('');
  const [publicationYear, setPublicationYear] = useState('');

  const [lista, setLista] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);

  // Utils
  function validateInputs() {
    if (!name) return alert('Falta el Nombre');
    if (!lastName) return alert('Falta el Apellido');
    if (!book) return alert('Falta el Nombre del libro');
    if (!autor) return alert('Falta el autor del libro');
    if (!publisher) return alert('Falta la editorial del libro');
    if (!publicationYear) return alert('Falta el año de publicación del libro');
    if (isNaN(publicationYear)) return alert('El año de publicación debe ser un número');

    // Verificar si el registro ya existe
    const existingBorrowIndex = lista.findIndex(
      item => item.name === name &&
        item.lastName === lastName &&
        item.book === book &&
        item.autor === autor &&
        item.publisher === publisher &&
        item.publicationYear === publicationYear
    );

    if (existingBorrowIndex !== -1) {
      setEditingIndex(-1);
      return alert('Este registro ya existe');
    }

    return true;
  }

  function resetInputs() {
    setName('');
    setLastName('');
    setBook('');
    setAutor('');
    setPublisher('');
    setPublicationYear('');
  }

  function loadEditInfo(index) {
    const item = lista[index];
    setName(item.name);
    setLastName(item.lastName);
    setBook(item.book);
    setAutor(item.autor);
    setPublisher(item.publisher);
    setPublicationYear(item.publicationYear);
    setEditingIndex(index);
  }

  // CRUD
  function registerBorrow(event) {
    event.preventDefault();
    if (validateInputs()) {
      setLista([
        ...lista,
        { name, lastName, book, autor, publisher, publicationYear }
      ]);
      event.target.reset();

      resetInputs();
    }
  }

  function editBorrow(event) {
    event.preventDefault();
    if (!validateInputs()) return;

    const updatedLista = [...lista];
    updatedLista[editingIndex] = { name, lastName, book, autor, publisher, publicationYear }
    setLista(updatedLista);
    setEditingIndex(-1);

    resetInputs();
  }

  function deleteBorrow(index) {
    const updatedLista = [...lista];
    updatedLista.splice(index, 1);
    setLista(updatedLista);
  }

  return (
    <main className="container py-3 col-lg-8 min-vh-100">
      <h2 className="text-center">Borrow a Book</h2>
      <form className="row mt-3 mb-5 g-3" onSubmit={registerBorrow}>
        <label className="text-danger text-opacity-75 fw-bold">User Information</label>
        <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"></path>
              </svg>
            </span>
            <input type="text"
              placeholder="Enter your Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"></path>
              </svg>
            </span>
            <input type="text"
              placeholder="Enter your Last Name"
              className='form-control'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <label className="text-danger text-opacity-75 fw-bold">Book Information</label>
        <div>
          <div className="input-group">
            <span className="input-group-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-book" viewBox="0 0 16 16">
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
              </svg>
            </span>
            <input type="text"
              placeholder="Enter the Book Tittle"
              className='form-control'
              value={book}
              onChange={(e) => setBook(e.target.value)}
            />
          </div>
        </div>

        <div>
          <div className="input-group">
            <span className="input-group-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
              </svg>
            </span>
            <input type="text"
              placeholder="Enter the Author's Name"
              className="form-control"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-journal-bookmark-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8z" />
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
              </svg>
            </span>
            <input type="text"
              placeholder="Enter the Book Publisher"
              className="form-control"
              value={publisher}
              onChange={(e) => setPublisher(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-date" viewBox="0 0 16 16">
                <path d="M6.445 11.688V6.354h-.633A13 13 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23" />
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
              </svg>
            </span>
            <input type="text"
              placeholder="Enter the Publication Year"
              className='form-control'
              value={publicationYear}
              onChange={(e) => setPublicationYear(e.target.value)}
            />
          </div>
        </div>
        <div className="d-grid gap-2">
          {editingIndex === -1 ? (
            <button className='btn btn-danger fw-semibold' type='submit'>
              Register
            </button>
          ) : (
            <button className='btn btn-dark fw-semibold' type='button' onClick={editBorrow}>
              Actualizar
            </button>
          )
          }
        </div>
      </form>
      <hr />
      <div className="container-fluid my-5 px-5 overflow-auto">
        <h2>Registered Borrows</h2>
        <table className="table table-striped table-hover" style={{ minWidth: "780px" }}>
          <thead>
            <tr>
              <th scope="col" className="text-body">Name</th>
              <th scope="col" className="text-body">Book</th>
              <th scope="col" className="text-body">Author</th>
              <th scope="col" className="text-body">Publisher</th>
              <th scope="col" className="text-body">Year</th>
              <th scope="col" className="text-body"></th>
            </tr>
          </thead>
          <tbody>
            {
              lista.map((item, index) => (
                <tr key={index}>
                  <td>{item.name} {item.lastName}</td>
                  <td>{item.book}</td>
                  <td>{item.autor}</td>
                  <td>{item.publisher}</td>
                  <td>{item.publicationYear}</td>
                  <td className="d-flex gap-2">
                    <button className="btn" onClick={() => loadEditInfo(index)}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.7312 2.26884C20.706 1.24372 19.044 1.24372 18.0188 2.26884L16.8617 3.42599L20.574 7.1383L21.7312 5.98116C22.7563 4.95603 22.7563 3.29397 21.7312 2.26884Z" fill="#525252" />
                        <path d="M19.5133 8.19896L15.801 4.48665L7.40019 12.8875C6.78341 13.5043 6.33002 14.265 6.081 15.101L5.28122 17.7859C5.2026 18.0498 5.27494 18.3356 5.46967 18.5303C5.6644 18.725 5.95019 18.7974 6.21412 18.7188L8.89901 17.919C9.73498 17.67 10.4957 17.2166 11.1125 16.5998L19.5133 8.19896Z" fill="#525252" />
                        <path d="M5.25 5.24999C3.59315 5.24999 2.25 6.59314 2.25 8.24999V18.75C2.25 20.4068 3.59315 21.75 5.25 21.75H15.75C17.4069 21.75 18.75 20.4068 18.75 18.75V13.5C18.75 13.0858 18.4142 12.75 18 12.75C17.5858 12.75 17.25 13.0858 17.25 13.5V18.75C17.25 19.5784 16.5784 20.25 15.75 20.25H5.25C4.42157 20.25 3.75 19.5784 3.75 18.75V8.24999C3.75 7.42156 4.42157 6.74999 5.25 6.74999H10.5C10.9142 6.74999 11.25 6.41421 11.25 5.99999C11.25 5.58578 10.9142 5.24999 10.5 5.24999H5.25Z" fill="#525252" />
                      </svg>
                    </button>

                    <button className="btn" onClick={() => deleteBorrow(index)}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.5001 4.47819V4.70498C17.4548 4.79237 18.4017 4.90731 19.3398 5.04898C19.6871 5.10143 20.0332 5.15755 20.3781 5.2173C20.7863 5.28799 21.0598 5.67617 20.9891 6.0843C20.9184 6.49244 20.5302 6.76598 20.1221 6.69529C20.0525 6.68323 19.9829 6.67132 19.9131 6.65957L18.9077 19.7301C18.7875 21.2931 17.4842 22.5 15.9166 22.5H8.08369C6.51608 22.5 5.21276 21.2931 5.09253 19.7301L4.0871 6.65957C4.0174 6.67132 3.94774 6.68323 3.87813 6.69529C3.47 6.76598 3.08183 6.49244 3.01113 6.0843C2.94043 5.67617 3.21398 5.28799 3.62211 5.2173C3.96701 5.15755 4.31315 5.10143 4.66048 5.04898C5.59858 4.90731 6.5454 4.79237 7.50012 4.70498V4.47819C7.50012 2.91371 8.71265 1.57818 10.3156 1.52691C10.8749 1.50901 11.4365 1.5 12.0001 1.5C12.5638 1.5 13.1253 1.50901 13.6847 1.52691C15.2876 1.57818 16.5001 2.91371 16.5001 4.47819ZM10.3635 3.02614C10.9069 3.00876 11.4525 3 12.0001 3C12.5478 3 13.0934 3.00876 13.6367 3.02614C14.3913 3.05028 15.0001 3.68393 15.0001 4.47819V4.59082C14.0078 4.53056 13.0075 4.5 12.0001 4.5C10.9928 4.5 9.99249 4.53056 9.00012 4.59082V4.47819C9.00012 3.68393 9.6089 3.05028 10.3635 3.02614ZM10.0087 8.97118C9.9928 8.55727 9.64436 8.23463 9.23045 8.25055C8.81654 8.26647 8.49391 8.61492 8.50983 9.02882L8.85599 18.0288C8.8719 18.4427 9.22035 18.7654 9.63426 18.7494C10.0482 18.7335 10.3708 18.3851 10.3549 17.9712L10.0087 8.97118ZM15.4895 9.02882C15.5054 8.61492 15.1828 8.26647 14.7689 8.25055C14.355 8.23463 14.0065 8.55727 13.9906 8.97118L13.6444 17.9712C13.6285 18.3851 13.9512 18.7335 14.3651 18.7494C14.779 18.7654 15.1274 18.4427 15.1433 18.0288L15.4895 9.02882Z" fill="#525252" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>

      </div>
    </main>
  )
}

export default Borrow
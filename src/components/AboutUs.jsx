import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
  const [employees, setEmployees] = useState([]);
  const getEmployees = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    setEmployees(data);
  }
  useEffect(() => {
    getEmployees();
  }, [])

  return (
    <main>
      <h3 className="text-center">Meet Our Employees</h3>
      <section className="d-flex justify-content-center align-items-center flex-wrap mx-3">
        <div>
          <ul className='list-group list-group-flush'>
            {
              employees.map((employee) => (
                <li
                  className='list-group-item d-flex align-items-center'
                  key={employee.id}>
                  <Link className='text-decoration-none link-danger link-opacity-75' to={`/about-us/${employee.id}`}> {employee.name} - {employee.email}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='d-inline col-sm-8 col-lg-4'>
          <img src="https://img.freepik.com/vector-premium/academia-bibliotecaria-nina-arte-popular-acuarela-2_886588-140.jpg" alt="img-employess" className="img-fluid small-image" />
        </div>
      </section>
    </main>
  )
}

export default AboutUs
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
    <section>
      <h3>Lista de Empleados:</h3>
      <ul className='list-group'>
        {
          employees.map((employee) => (
            <li
              className='list-group-item'
              key={employee.id}>
              <Link to={`/about-us/${employee.id}`}>{employee.name} - {employee.email}</Link>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default AboutUs
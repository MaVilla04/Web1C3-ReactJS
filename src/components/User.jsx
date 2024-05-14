import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  const [employee, setEmployee] = useState([]);
  const getEmployeeInfo = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    setEmployee(data);
  }
  useEffect(() => {
    getEmployeeInfo();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "75vh" }}>
      <div className="card mx-5 shadow align-items-center" style={{ maxWidth: "480px" }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#e36572" className="bi bi-person-fill col-8" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"></path>
        </svg>
        <div className="card-body">
          <h3>{employee.name}</h3>
          <h5 className="text-body-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"></path>
          </svg> Username: {employee.username}</h5>
          <h5 className="text-body-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"></path>
          </svg> Website: {employee.website} </h5>
        </div>
      </div>

    </div>
  )
}

export default User
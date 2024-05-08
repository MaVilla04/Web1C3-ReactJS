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
    <div>
      <h2>Datos del Empleado</h2>
      <h3>{employee.name}</h3>
      <p>Website: {employee.website} - Username: {employee.username}</p>
    </div>
  )
}

export default User
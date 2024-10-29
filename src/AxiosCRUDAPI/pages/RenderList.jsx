import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function RenderList() {
  const { id } = useParams();
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  // const [project, setProject] = useState([]);
  const [deparmentName, setDepartmentName] = useState(" ");


  useEffect(() => {
    axios
      .get("/departments")
      .then((response) => setDepartments(response.data))
      .catch((err) => console.log(err));

    // axios
    //   .get("/projects")
    //   .then((response) => setProject(response.data))
    //   .catch((err) => console.log(err));

    axios
      .get(`/employees?department=${id}`)
      .then((response) => setEmployees(response.data))
      .catch((err) => console.log(err));

      if(departments && departments.length){
        setDepartmentName(departments.find((item) => item?.id === id)?.name);
      }

  }, [id, departments]);

  // const departmentName = () => {
  //   const departName = departments.find(
  //     (item) => item?.id === project?.department
  //   )?.name;
  //   return departName || "Unknown Department"; // Return the name or a fallback value
  // };

  const renderData = () => {
    return (
      <Table striped hover bordered>
        <thead>
          <tr>
            <th>Id</th>
            <th>Employees Name</th>
            <th>Date of birth</th>
            <th>Gender</th>
            <th>Position</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((item, index) => (
            <tr key={index}>
              <td>{item?.id}</td>
              <td>{item?.name}</td>
              <td>{item?.dob}</td>
              <td>{item?.gender}</td>
              <td>{item?.position}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  if (!id) return null;
  return (
    <div className="container">
      <div className="row">
        <Link to={"/"}>Home Page</Link>
        <h4>Department: {deparmentName}</h4>
        <h1 className="text-center mb-3">List Employees</h1>
        {renderData()}
      </div>
    </div>
  );
}

export default RenderList;

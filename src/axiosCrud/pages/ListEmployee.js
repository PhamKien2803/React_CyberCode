import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function ListEmployee() {
  const param = useParams();
  const { id } = param;
  const [cloneEployees, setCloneEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [deparmentName, setDepartmentName] = useState(" ");

  //Call API
  useEffect(() => {
    if (id) {
      const handleAxiosDepartments = async () => {
        try {
          const request = await axios.get("/departments");
          if (request.status === 200 && request.data.length) {
            const respone = request.data;
            setDepartments(respone);
          }
        } catch (error) {
          console.log(error);
        }
      };

      const handleAxiosemployees = async () => {
        try {
          const request = await axios.get(`/employees?department=${id}`);
          if (request.status === 200 && request.data.length) {
            const respone = request.data;
            setCloneEmployees(respone);
          }
        } catch (error) {
          console.log(error);
        }
      };
      handleAxiosemployees();
      handleAxiosDepartments();
    }
  }, [id]);

  useEffect(() => {
    if (departments && departments.length) {
      setDepartmentName(departments.find((item) => item.id === id)?.name);
    }
  }, [departments]);

  //check dieu kien khong ton tai ID
  if (!id) return null;

  return (
    <>
      <Link to={"/"}>Home Page</Link>
      <h4>Department: {deparmentName}</h4>

      {cloneEployees.length ? (
        <Table striped>
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
            {cloneEployees.map((item, index) => {
              const { id, name, dob, gender, position } = item;

              return (
                <tr key={index}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{dob}</td>
                  <td>{gender}</td>
                  <td>{position}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : null}
    </>
  );
}

export default ListEmployee;

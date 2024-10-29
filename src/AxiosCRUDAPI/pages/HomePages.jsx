import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";

function HomePages() {
  const [departments, setDepartments] = useState([]);
  const [projects, setProjects] = useState([]);

  const [radioValue, setRadioValue] = useState(0);
  const [searchProject, setSearchProject] = useState("");

  useEffect(() => {
    axios
      .get("/departments")
      .then((response) => setDepartments(response.data))
      .catch((err) => console.log(err));

    axios
      .get("/projects")
      .then((response) => setProjects(response.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChangeRadioValue = (value) => {
    setRadioValue(parseInt(value));
  };

  const handleSearchValue = (event) => {
    setSearchProject(event.target.value);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (confirmed) {
      try {
        const response = await axios.delete(`/projects/${id}`);
        if (response.status === 200) {
          alert("Delete successfully!!");
          window.location.reload();
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const filterProject = () => {
    return projects.filter((project) => {
      // Search by project name
      const matchesSearch =
        searchProject === "" ||
        project.name.toLowerCase().includes(searchProject.toLowerCase());

      // Filter by department ID if a department is selected
      const matchesDepartment =
        radioValue === 0 || parseInt(project.department) === radioValue;

      // Only return the project if both search and department filter match
      return matchesSearch && matchesDepartment;
    });
  };

  const renderDepartments = () => {
    return (
      <Form>
        <Form.Check
          label="All"
          type="radio"
          checked={radioValue === 0}
          onChange={() => handleChangeRadioValue(0)}
        ></Form.Check>
        {departments.map((item, index) => (
          <Form.Check
            key={index}
            label={item?.name}
            value={item?.id}
            type="radio"
            checked={radioValue === parseInt(item?.id)}
            onChange={() => handleChangeRadioValue(item?.id)}
          ></Form.Check>
        ))}
      </Form>
    );
  };

  const renderProjects = () => {
    const filteredProjects = filterProject();
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Project Name</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>Type</th>
            <th>Department</th>
            <th>Function</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map((item, index) => {
            const departmentName = departments.find(
              (department) =>
                parseInt(department?.id) === parseInt(item?.department)
            )?.name;
            return (
              <tr key={index}>
                <td>{item?.id}</td>
                <td>{item?.name}</td>
                <td>{item?.description}</td>
                <td>{item?.startDate}</td>
                <td>{item?.type}</td>
                <td>
                  <Link to={`/departments/${item?.department}/employees`}>
                    {departmentName}
                  </Link>
                </td>
                <td>
                  <Button
                    variant="primary"
                    as={Link}
                    to={`/projects/edit/${item?.id}`}
                  >
                    Edit
                  </Button>
                </td>

                <td>
                  <Button
                    style={{ marginLeft: "2%" }}
                    variant="danger"
                    onClick={() => handleDelete(item?.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  };

  return (
    <div style={{ width: "85%" }} className="container-fluid">
      <h1 className="text-center">List of Project</h1>
      <div className="row">
        <h4>Filter</h4>
        <div className="col-md-3">{renderDepartments()}</div>

        <div className="col-md-9">
          <div className="row">
            <Button
              className="mb-3 w-25"
              variant="success"
              as={Link}
              to="/projects/add"
            >
              Create New Project
            </Button>
          </div>
          <div className="row">
            <Form.Control
              type="text"
              placeholder="Enter project name to search"
              value={searchProject}
              onChange={handleSearchValue}
              className="mb-3"
            />
          </div>
          {renderProjects()}
        </div>
      </div>
    </div>
  );
}

export default HomePages;

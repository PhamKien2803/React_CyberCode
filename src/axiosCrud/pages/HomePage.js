import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

function HomePage() {
  const [departments, setDepartments] = useState([]);
  const [projects, setProjects] = useState([]);

  const [radioValue, setRadioValue] = useState(0);
  const [cloneProjects, setCloneProjects] = useState([]);

  const [searchProject, setSearchProject] = useState(" ");

  //Change Radio btn
  const handleChangeradioValue = (value) => {
    const result = parseInt(value);
    setRadioValue(result);
  };

  //Filter
  useEffect(() => {
    let filterProjects = projects;
    if (radioValue !== 0) {
      filterProjects = projects.filter(
        (projects) => projects.department === radioValue
      );
    }
    setCloneProjects(filterProjects);
  }, [projects, radioValue]);

  //Call API

  useEffect(() => {
    const handleAxiosData = async () => {
      try {
        const [requestDepartments, requestProjects] = await Promise.all([
          axios.get("/departments"),
          axios.get("/projects"),
        ]);

        if (
          requestDepartments.status === 200 &&
          requestDepartments.data.length
        ) {
          const respone = requestDepartments.data;
          setDepartments(respone);
        }

        if (requestProjects.status === 200 && requestProjects.data.length) {
          const respone = requestProjects.data;
          setProjects(respone);
        }
      } catch (error) {
        console.log(error);
      }
    };
    handleAxiosData();
  }, []);

  //Delete
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (confirmed) {
      try {
        const response = await axios.delete(`/projects/${id}`);
        if (response.status === 200) {
          alert("Project deleted successfully");
          // Cập nhật lại danh sách dự án sau khi xóa
          //setProjects(projects.filter((project) => project.id !== id));
          window.location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  //Search
  const handleSearch = (e) => {
    setSearchProject(e.target.value);
  };

  // Filter projects based on search input
  useEffect(() => {
    if (searchProject.trim() !== "") {
      const filteredProjects = projects.filter((project) =>
        project.name.toLowerCase().includes(searchProject.toLowerCase())
      );
      setCloneProjects(filteredProjects);
    } else {
      setCloneProjects(projects);
    }
  }, [projects, searchProject]);

  return (
    <Container>
      <h1 style={{textAlign:"center", marginBottom: "5rem"}}>List of Projects</h1>
      <Row>
        <Col xs={3}>
          <h4>Filter</h4>
          <Form>
            <h4>Department</h4>
            <Form.Check
              label="All"
              name="group1"
              type="radio"
              id={`radio-0`}
              checked={radioValue === 0}
              onChange={() => handleChangeradioValue(0)}
            />

            {departments.map((item, index) => (
              <Form.Check
                label={item?.name}
                name="group1"
                type="radio"
                id={`radio-{item.id}`}
                key={index}
                checked={radioValue === parseInt(item.id)}
                onChange={() => handleChangeradioValue(item.id)}
              />
            ))}
          </Form>
        </Col>

        <Col xs={9}>
          <div>
            <Button className="mb-3" variant="success" as={Link} to="/projects/add">
              Create New Project
            </Button>

            <Form.Control
              type="text"
              placeholder="Enter project name to search"
              value={searchProject}
              onChange={handleSearch}
              className="mb-3"
            />

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
                {cloneProjects.map((item, index) => {
                  const { id, name, description, startDate, type, department } =
                    item;

                  const deparmentName = departments.find(
                    (item) => parseInt(item.id) === parseInt(department)
                  )?.name;
                  
                  return (
                    <tr key={index}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{description}</td>
                      <td>{startDate}</td>
                      <td>{type}</td>
                      <td>
                        <Link to={`/departments/${department}/employees`}>
                          {deparmentName}
                        </Link>
                      </td>
                      <td>
                        <Button
                          variant="primary"
                          as={Link}
                          to={`/projects/edit/${id}`}
                        >
                          Edit
                        </Button>
                      </td>

                      <td>
                        <Button
                          style={{ marginLeft: "2%" }}
                          variant="danger"
                          onClick={() => handleDelete(id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;

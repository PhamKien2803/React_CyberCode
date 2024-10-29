import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
function Create() {
  const [department, setDepartment] = useState([]);
  const [projects, setProjects] = useState({
    name: "",
    description: "",
    startDate: "",
    type: "",
    department: "",
  });

  useEffect(() => {
    axios
      .get("/departments")
      .then((response) => setDepartment(response.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjects({ ...projects, [name]: value });
  };

  const renderDepartments = () => {
    return department.map((item) => {
      return (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      );
    });
  };

  const handleCreateProjects = async () => {
    try {
      const request = await axios.post("/projects", projects);
      if (request.status === 201) {
        alert("Create successfully!!");
        // window.location.reload();
        window.location.href = "/";
      } else {
        alert("Create failed!!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <Link to={"/"}>Home Page</Link>

        <Form onSubmit={handleCreateProjects} style={{ marginTop: "2%" }}>
          <Form.Group className="mb-3" controlId="ControlInput1">
            <Form.Label>Project Name*</Form.Label>
            <Form.Control
              value={projects?.name}
              onChange={handleChange}
              type="text"
              name="name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={projects?.description}
              onChange={handleChange}
              as="textarea"
              rows={3}
              name="description"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="ControlInput1">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              value={projects?.startDate}
              onChange={handleChange}
              type="date"
              name="startDate"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="ControlInput1">
            <Form.Label>Type</Form.Label>
            <Form.Control
              value={projects?.type}
              onChange={handleChange}
              type="text"
              name="type"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="ControlInput1">
            <Form.Label>Department</Form.Label>
            <Form.Select
              onChange={handleChange}
              value={projects?.department}
              name="department"
            >
              {renderDepartments()}
            </Form.Select>
          </Form.Group>

          <Button type="submit">Create</Button>
        </Form>
      </div>
    </div>
  );
}

export default Create;

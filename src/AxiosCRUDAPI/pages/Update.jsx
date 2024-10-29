import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const [project, setProject] = useState({
    name: "",
    description: "",
    startDate: "",
    type: "",
    department: "",
  });

  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios
      .get("/departments")
      .then((response) => setDepartments(response.data))
      .catch((err) => console.log(err));

    axios
      .get(`/projects/${id}`)
      .then((response) => setProject(response.data))
      .catch((err) => console.log(err));
  }, [id]);

  const renderDepartments = () => {
    return departments.map((item) => {
      return (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      );
    });
  };
  const handleChangeValue = (e) => {
    const { name, value } = e.target;
    setProject({...project, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      if (!project?.name) {
        alert("Please enter the form fields that are required!");
        return;
      }
      const response = await axios.put(`/projects/${id}`, project);
      if (response.status === 200) {
        // 200: success code
        alert("Update successfully!!!");
        window.location.href = "/";
      } else {
        alert("Update failed!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!id) return null;

  return (
    <div className="container">
      <div className="row">
        <Link to={"/"}>Home Page</Link>

        <Form style={{ marginTop: "3%" }} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="ControlInput1">
            <Form.Label>Project Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              onChange={handleChangeValue}
              value={project?.name}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a project name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="ControlTextarea2">
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={handleChangeValue}
              as="textarea"
              rows={3}
              name="description"
              value={project?.description}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="ControlInput3">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              onChange={handleChangeValue}
              type="date"
              rows={3}
              name="startDate"
              value={project?.startDate}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="ControlInput4">
            <Form.Label>Type</Form.Label>
            <Form.Control
              onChange={handleChangeValue}
              type="text"
              rows={3}
              name="type"
              value={project?.type}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="ControlInput5">
            <Form.Label>Department</Form.Label>
            <Form.Select
              onChange={handleChangeValue}
              name="department"
              value={project?.department}
            >
              {renderDepartments()}
            </Form.Select>
          </Form.Group>

          <Button type="submit">Update</Button>
        </Form>
      </div>
    </div>
  );
}

export default Update;

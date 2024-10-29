import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const defaultData = {
  name: "",
  description: "",
  startDate: "",
  type: "",
  department: "",
};

function EditProjectPage() {
  const params = useParams();
  const { id } = params;
  const [project, setProjects] = useState([defaultData]);
  const [departments, setDepartments] = useState([]);

  const handleChangeValue = (e) => {
    const { name, value } = e.target;
    setProjects((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.stopPropagation();
    e.preventDefault();

    try {
      if (!project.name) {
        alert("Please enter the form fields that are required.");
        return;
      }

      const request = await axios.put(`/projects/${id}`, project);
      if (request.status === 200) {
        alert("Update Success");
        window.location.href = "/";
      }
    } catch (e) {
      console.log(e);
    }
  };

  console.log(project);
  console.log(departments);
  useEffect(() => {
    const handleFetchData = async () => {
      try {
        const [requestDepartments, requestProjects] = await Promise.all([
          axios.get("/departments"),
          axios.get(`/projects/${id}`),
        ]);

        if (
          requestDepartments.status === 200 &&
          requestDepartments.data.length
        ) {
          const respone = requestDepartments.data;
          setDepartments(respone);
        }

        if (requestProjects.status === 200 && requestProjects.data) {
          const respone = requestProjects.data;
          setProjects(respone);
        }
      } catch (e) {
        console.log(e);
      }
    };
    handleFetchData();
  }, [id]);

  if (!id) return null;

  return (
    <>
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
            {departments.map((item, index) => (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button type="submit">Update</Button>
      </Form>
    </>
  );
}

export default EditProjectPage;

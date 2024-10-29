import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";


function CreateProject() {
  const [department, setDepartment] = useState([]);
  const [project, setProject] = useState({
    name: "",
    description: "",
    startDate: "",
    type: "",
    department: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setProject({ ...project, [name]: value });
  };
  
  

  const handleCreate =  async (e) => {
     e.preventDefault();
    console.log("Form submitted", project);
    try {
      const request = await axios.post("/projects", project);
      if (request.status === 200 || request.status === 201) {
        alert("OK!!!");
        window.location.href= "/"
      } else {
        alert("Tạo thất bại");
      }
    } catch (e) {
      console.error(e); 
    }
  };


  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get("/departments");
        if (response.status === 200 && response.data.length) {
          setDepartment(response.data);
        }
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };
    fetchDepartments();
  }, []);

  return (
    <>
      <Link to={"/"}>Home Page</Link>

      <Form onSubmit={handleCreate} style={{ marginTop: "2%" }}>
        <Form.Group className="mb-3" controlId="ControlInput1">
          <Form.Label>Project Name*</Form.Label>
          <Form.Control
            type="text"
            name="name"
            onChange={handleChange}
            value={project?.name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            onChange={handleChange}
            value={project?.description}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="ControlInput1">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            name="startDate"
            onChange={handleChange}
            value={project?.startDate}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="ControlInput1">
          <Form.Label>Type</Form.Label>
          <Form.Control
            type="text"
            name="type"
            onChange={handleChange}
            value={project?.type}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="ControlInput1">
          <Form.Label>Department</Form.Label>
          <Form.Select
            name="department"
            onChange={handleChange}
            value={project?.department}
          >
            {department &&
              department.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.name}
                </option>
              ))}
          </Form.Select>
        </Form.Group>

        <Button type="submit">Create</Button>
      </Form>
    </>
  );
}

export default CreateProject;

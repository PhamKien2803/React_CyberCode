import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function CreateGrade() {
  const [students, setStudents] = useState([]);
  const [studentDetails, setStudentDetails] = useState({});
  const [evaluations, setEvaluations] = useState([]);
  const [subjects, setSubjects] = useState([]);

  const [newGrade, setNewGrade] = useState("");
  const [newExplanation, setNewExplanation] = useState("");
  const [newSubjectId, setNewSubjectId] = useState("");
  const [newSubjectName, setNewSubjectName] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios
      .get("/students")
      .then((response) => setStudents(response.data))
      .catch((err) => console.log(err));

    axios
      .get("/evaluations")
      .then((response) => setEvaluations(response.data))
      .catch((err) => console.log(err));

    axios
      .get("/subjects")
      .then((response) => setSubjects(response.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (id && students.length > 0) {
      const student = students.find((stu) => stu.id === id);
      if (student) {
        setStudentDetails(student);
      }
    }
  }, [id, students]);

  const handleAddGrade = async () => {
    if (id && newGrade && newExplanation) {
      const newEvaluation = {
        studentId: id,
        grade: parseFloat(newGrade),
        additionalExplanation: newExplanation,
      };

      try {
        const response = await axios.post("/evaluations", newEvaluation);
        if (response.status === 201) {
          setEvaluations([...evaluations, response.data]);
          setNewGrade("");
          setNewExplanation("");

          alert("Grade added successfully!");
        } else {
          throw new Error("Failed to add grade");
        }
      } catch (err) {
        console.error("Error adding grade:", err);
        alert("An error occurred while adding the grade. Please try again.");
      }
    } else {
      alert("Please fill in both Grade and Explanation fields.");
    }
  };

  const addSubject = async () => {
    if (newSubjectId && newSubjectName) {
      const newSubject = {
        id: newSubjectId,
        subjectId: newSubjectId,
        name: newSubjectName,
      };

      try {
        const response = await axios.post("/subjects", newSubject);
        setSubjects([...subjects, response.data]);
        setNewSubjectId("");
        setNewSubjectName("");
      } catch (err) {
        console.error("Error adding subject:", err);
        alert("An error occurred while adding the subject. Please try again.");
      }
    } else {
      alert("Please fill in both Subject ID and Name");
    }
  };

  const createSubject = () => (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter Subject ID"
            value={newSubjectId}
            onChange={(e) => setNewSubjectId(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter Subject Name"
            value={newSubjectName}
            onChange={(e) => setNewSubjectName(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Button onClick={addSubject}>Add</Button>
    </div>
  );

  const renderSubjects = () => (
    <ul style={{ marginLeft: "10%" }}>
      {subjects.map((sub) => (
        <li key={sub?.id}>
          <Link to={`/grades/${sub?.subjectId}`}>{sub?.name}</Link>
        </li>
      ))}
    </ul>
  );

  const renderGradeStudent = () => {
    const studentEvaluations = evaluations.filter(
      (evaluation) => evaluation.studentId === id
    );

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Grade</th>
            <th>Explanation</th>
          </tr>
        </thead>
        <tbody>
          {studentEvaluations.map((evaluation) => (
            <tr key={evaluation?.id}>
              <td>{evaluation?.grade}</td>
              <td>{evaluation?.additionalExplanation}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  const addGradeStudent = () => (
    <Form style={{ marginBottom: "3%" }}>
      <Row>
        <Col>
          <Form.Control
            type="number"
            placeholder="Enter grade"
            value={newGrade}
            onChange={(e) => setNewGrade(e.target.value)}
          />
        </Col>
        <Col>
          <Form.Control
            type="text"
            placeholder="Enter additional explanation"
            value={newExplanation}
            onChange={(e) => setNewExplanation(e.target.value)}
          />
        </Col>
        <Col xs="auto">
          <Button variant="primary" onClick={handleAddGrade}>
            Add new
          </Button>
        </Col>
      </Row>
    </Form>
  );

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Student Management</h1>
      <Container fluid style={{ width: "95%" }}>
        <Row>
          <Col md={3}>
            <Row>
              <h2>Subjects</h2>
            </Row>
            {renderSubjects()}
            {createSubject()}
          </Col>
          <Col md={9}>
            <Row>
              <Button
                as={Link}
                to={`/`}
                style={{ width: "12%" }}
                variant="success"
              >
                Back to Home
              </Button>
            </Row>

            <Row>
              <h2 style={{ textAlign: "center" }}>
                {studentDetails.name
                  ? `Grade Details for ${studentDetails?.name}`
                  : "Grade Details"}
              </h2>
            </Row>

            <Row>
              <h3>Add a new grade for {studentDetails?.name}</h3>
            </Row>
            {addGradeStudent()}
            {renderGradeStudent()}
          </Col>
        </Row>
        <hr style={{ color: "gray", width: "100%", border: "solid 2px" }} />
        <Row>
          <h5 style={{ textAlign: "center" }}>Copyright by: HE17xxxx</h5>
        </Row>
      </Container>
    </div>
  );
}

export default CreateGrade;

import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

interface Student {
  id: string;
  name: string;
}

interface Evaluation {
  id: string;
  studentId: string;
  grade: number;
  additionalExplanation: string;

}

interface Subject {
  id: string;
  subjectId: string;
  name: string;
}


function CreateGrade() {
  const [students, setStudents] = useState<Student[]>([]);
  const [studentDetails, setStudentDetails] = useState<Student | null>(null);
  const [evaluations, setEvaluations] = useState<Evaluation[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);

  const [newGrade, setNewGrade] = useState<string>("");
  const [newExplanation, setNewExplanation] = useState<string>("");
  const [newSubjectId, setNewSubjectId] = useState<string>("");
  const [newSubjectName, setNewSubjectName] = useState<string>("");

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    axios
      .get<Student[]>("/students")
      .then((response) => setStudents(response.data))
      .catch((err) => console.log(err));

    axios
      .get<Evaluation[]>("/evaluations")
      .then((response) => setEvaluations(response.data))
      .catch((err) => console.log(err));

    axios
      .get<Subject[]>("/subjects")
      .then((response) => setSubjects(response.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (id && students.length > 0) {
      const student = students.find((stu) => stu?.id === id)
      if (student) {
        setStudentDetails(student)
      }
    }
  }, [id, students]);

  const handleAddGrade = async () => {
    if (id && newGrade && newExplanation) {
      const newEvaluation: Omit<Evaluation, "id"> = {
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
      const newSubject: Omit<Subject, "id"> = {
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
      <h1 className="text-center">Student Managements</h1>
      <div className="container-fluid w-95">
        <div className="row">
          <div className="col-md-3">
            <div className="row">
              <h2>Subjects</h2>
            </div>
            {renderSubjects()}
            {createSubject()}
          </div>

          <div className="col-md-9">
            <div className="row">
              <Button
                // as={Link} to={"/"}
                style={{ width: "12%" }}
                variant="success"
              >
                Back to Home
              </Button>
            </div>

            <div className="row">
              <h2 className="text-center">
                {studentDetails?.name
                  ? `Grade Details for ${studentDetails?.name}`
                  : "Grade Details"}
              </h2>
            </div>

            <div className="row">
              <h3>Add a new grade for {studentDetails?.name}</h3>
            </div>
            {addGradeStudent()}
            {renderGradeStudent()}
          </div>
        </div>
        <hr className="gray-400 w-100 border-solid" />
        <div className="row">
          <h5 className="text-center">Copyright by: HE17xxxx</h5>
        </div>
      </div>
    </div>
  )
}

export default CreateGrade

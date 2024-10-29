import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

// Định nghĩa kiểu cho dữ liệu sinh viên
interface Student {
  id: string;
  name: string;
  // Các thuộc tính khác nếu có
}

// Định nghĩa kiểu cho dữ liệu đánh giá
interface Evaluation {
  id: string;
  studentId: string;
  grade: number;
  additionalExplanation: string;
}

// Định nghĩa kiểu cho dữ liệu môn học
interface Subject {
  id: string;
  subjectId: string;
  name: string;
}

function CreateGrade() {
  // Các trạng thái sử dụng kiểu rõ ràng
  const [students, setStudents] = useState<Student[]>([]);
  const [studentDetails, setStudentDetails] = useState<Student | null>(null);
  const [evaluations, setEvaluations] = useState<Evaluation[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);

  const [newGrade, setNewGrade] = useState<string>("");
  const [newExplanation, setNewExplanation] = useState<string>("");
  const [newSubjectId, setNewSubjectId] = useState<string>("");
  const [newSubjectName, setNewSubjectName] = useState<string>("");

  // Sử dụng hook useParams để lấy id từ URL, và gán kiểu cho nó
  const { id } = useParams<{ id: string }>();

  // Lấy dữ liệu từ API
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

  // Khi `id` thay đổi, cập nhật thông tin chi tiết của sinh viên
  useEffect(() => {
    if (id && students.length > 0) {
      const student = students.find((stu) => stu.id === id);
      if (student) {
        setStudentDetails(student);
      }
    }
  }, [id, students]);

  // Hàm thêm điểm cho sinh viên
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

  // Hàm thêm môn học
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

  // Render form thêm môn học
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

  // Render danh sách môn học
  const renderSubjects = () => (
    <ul style={{ marginLeft: "10%" }}>
      {subjects.map((sub) => (
        <li key={sub?.id}>
          <Link to={`/grades/${sub?.subjectId}`}>{sub?.name}</Link>
        </li>
      ))}
    </ul>
  );

  // Render bảng điểm của sinh viên
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

  // Render form thêm điểm cho sinh viên
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
                // as={Link}
                // to={`/`}
                style={{ width: "12%" }}
                variant="success"
              >
                Back to Home
              </Button>
            </Row>

            <Row>
              <h2 style={{ textAlign: "center" }}>
                {studentDetails?.name
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

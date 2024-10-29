import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

// Define the types for the entities used in the component
interface Student {
  studentId: string;
  name: string;
  age: number;
  isRegularStudent: boolean;
}

interface StudentDetail {
  studentId: string;
  address: {
    street: string;
    city: string;
  };
}

interface Subject {
  id: string;
  subjectId: string;
  name: string;
}

interface StudentSubject {
  studentId: string;
  subjectId: string;
}

function StudentList() {
  const [students, setStudents] = useState<Student[]>([]);
  const [studentDetails, setStudentDetails] = useState<StudentDetail[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [studentSubjects, setStudentSubjects] = useState<StudentSubject[]>([]);

  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [newSubjectId, setNewSubjectId] = useState<string>("");
  const [newSubjectName, setNewSubjectName] = useState<string>("");

  useEffect(() => {
    axios
      .get("/students")
      .then((response) => setStudents(response.data))
      .catch((err) => console.log(err));

    axios
      .get("/student_details")
      .then((response) => setStudentDetails(response.data))
      .catch((err) => console.log(err));

    axios
      .get("/students_subjetcs")
      .then((response) => setStudentSubjects(response.data))
      .catch((err) => console.log(err));

    axios
      .get("/subjects")
      .then((response) => setSubjects(response.data))
      .catch((err) => console.log(err));
  }, []);

  // Filter students based on selected subject and search query
  const filterStudents = () => {
    return students
      .filter((student) => {
        // Filter based on selected subject
        if (selectedSubject) {
          return studentSubjects.find(
            (studentsSubjects) =>
              studentsSubjects?.studentId === student?.studentId &&
              studentsSubjects?.subjectId === selectedSubject
          );
        }
        return true;
      })
      .filter((student) => {
        // Filter based on search query
        return (
          searchQuery === "" ||
          student.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
  };

  // Render subjects list with links
  const renderSubjects = () => {
    return (
      <ul style={{ marginLeft: "10%" }}>
        <li>
          <Link to="#" onClick={() => setSelectedSubject("")}>
            All Subjects
          </Link>
        </li>
        {subjects.map((sub) => (
          <li key={sub?.id}>
            <Link to="#" onClick={() => setSelectedSubject(sub.subjectId)}>
              {sub?.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  // Render student information table
  const renderStudentInformation = () => {
    const filteredStudents = filterStudents();
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>StudentId</th>
            <th>Name</th>
            <th>Age</th>
            <th>Street</th>
            <th>City</th>
            <th>IsRegularStudent</th>
            <th>View grades</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((stu) => {
            const studentDetail = studentDetails.find(
              (detail) => detail.studentId === stu.studentId
            );

            const isRegularStudent = stu.isRegularStudent
              ? "Fulltime"
              : "Applicant";

            return (
              <tr key={stu.studentId}>
                <td>{stu.studentId}</td>
                <td>{stu.name}</td>
                <td>{stu.age}</td>
                <td>{studentDetail ? studentDetail.address.street : "N/A"}</td>
                <td>{studentDetail ? studentDetail.address.city : "N/A"}</td>
                <td>{isRegularStudent}</td>
                <td>
                  <Link to={`/student/${stu.studentId}`}>Grades</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  };

  const addSubject = () => {
    if (newSubjectId && newSubjectName) {
      const newSubject: Subject = {
        id: newSubjectId,
        subjectId: newSubjectId,
        name: newSubjectName,
      };

      axios
        .post("/subjects", newSubject)
        .then((response) => {
          setSubjects([...subjects, response.data]);
          setNewSubjectId("");
          setNewSubjectName("");
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please fill in both Subject ID and Name");
    }
  };

  const createSubject = () => {
    return (
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
        <button onClick={addSubject}>Add</button>
      </div>
    );
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Student Management</h1>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          marginBottom: "3%",
        }}
      >
        <input
          style={{ width: "70%", padding: "5px", fontSize: "16px" }}
          type="text"
          placeholder="Enter student name to search ..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

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
              <h2>List of Students</h2>
            </Row>
            {renderStudentInformation()}
          </Col>
        </Row>
        <hr style={{ color: "gray", width: "100%", border: "solid 2px" }}></hr>
        <Row>
          <h5 style={{ textAlign: "center" }}>Copyright by: HE17xxxx</h5>
        </Row>
      </Container>
    </div>
  );
}

export default StudentList;

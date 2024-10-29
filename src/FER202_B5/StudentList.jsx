import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [studentDetails, setStudentDetails] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [studentSubjects, setStudentSubjects] = useState([]);

  const [selectedSubject, setSelectedSubject] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [newSubjectId, setNewSubjectId] = useState("");
  const [newSubjectName, setNewSubjectName] = useState("");

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
            //Logic: 1: Môn học này dược học bởi ai ? => student
            //Logic: 2: Ai đang học môn học này và họ tên gì ? => student = Nguyen Van A
            //Logic: 3: Mã môn học này tên là gì ? => Java with OOP = PRO192
            (studentsSubjectss) =>
              studentsSubjectss?.studentId === student?.studentId &&
              studentsSubjectss?.subjectId === selectedSubject
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
    const filterStudentSubjects = filterStudents();
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
          {filterStudentSubjects.map((stu) => {
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
      const newSubject = {
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

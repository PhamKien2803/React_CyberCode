import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";

function StudentList({
  studentListProps,
  subjectProps,
  filteredSubjects,
  studentDetailsProps,
  createSubjectss,
  searchStudent,
  filterSubject,
  filterSubjectName,
}) {
  const [newSubject, setNewSubject] = useState({ subjectId: "", name: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [subjectSearchTerm, setSubjectSearchTerm] = useState("");

  const renderDataSubject = () => {
    return (
      <ul style={{ marginLeft: "10%" }}>
        <li>
          <Link to="#" onClick={() => filterSubject("all")}>
            All Subjects
          </Link>
        </li>
        {subjectProps.map((item, index) => (
          <li key={index}>
            <Link to="#" onClick={() => filterSubject(item.subjectId)}>
              {item?.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  const renderDataSubject2 = () => {
    return (
      <div>
        <input
          type="text"
          placeholder="Search subjects..."
          value={subjectSearchTerm}
          onChange={(e) => {
            setSubjectSearchTerm(e.target.value);
            filterSubjectName(e.target.value);
          }}
        />
        <ul style={{ marginLeft: "10%" }}>
          {(filteredSubjects.length > 0 ? filteredSubjects : subjectProps).map((item, index) => (
            <li key={index}>
              <Link to="#" onClick={() => filterSubject(item.subjectId)}>
                {item?.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const createSubject = () => {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Subject ID"
              value={newSubject.subjectId}
              onChange={(e) =>
                setNewSubject({ ...newSubject, subjectId: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Subject Name"
              value={newSubject.name}
              onChange={(e) =>
                setNewSubject({ ...newSubject, name: e.target.value })
              }
            />
          </Form.Group>
        </Form>
        <button onClick={() => createSubjectss(newSubject)}>Add</button>
      </div>
    );
  };

  const renderDataStudent = () => {
    const studentsToRender =
      studentListProps.length > 0 ? studentListProps : [];
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
          {studentsToRender.map((item, index) => {
            const studentDetails = studentDetailsProps.find(
              (details) => details.id === item.id
            );

            const isRegularStudent = item.isRegularStudent
              ? "Fulltime"
              : "Applicant";
            return (
              <tr key={index}>
                <td>{item.studentId}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>
                  {studentDetails ? studentDetails.address.street : "N/A"}
                </td>
                <td>{studentDetails ? studentDetails.address.city : "N/A"}</td>
                <td>{isRegularStudent}</td>
                <td>
                  <Link to={`/student/${item.id}/grades`}>View grades</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  };

  const renderSubject = () => {
    return (
      <Table>
        <thead>
          <th>ID</th>
          <th>Subject ID</th>
          <th>Subject Name</th>
        </thead>
        <tbody>
          {subjectProps.map((item, index) => (
            <tr key={index}>
              <td>{item?.id}</td>
              <td>{item?.subjectId}</td>
              <td>{item?.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Student Management</h1>
      <div
        className="mb-3"
        style={{ justifyContent: "center", display: "flex" }}
      >
        <input
          style={{ width: "70%", padding: "5px", fontSize: "16px" }}
          type="text"
          placeholder="Enter student name to search ..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            searchStudent(e.target.value);
          }}
        />
      </div>
      <Container fluid style={{ width: "95%" }}>
        <Row>
          <Col md={3}>
            <Row>
              <h2>Subjects</h2>
            </Row>
            {renderDataSubject()}
            {createSubject()}
            <hr
              style={{ color: "gray", width: "100%", border: "solid 2px" }}
            ></hr>

            {renderDataSubject2()}
          </Col>
          <Col md={9}>
            <Row>
              <h2>List of Students</h2>
            </Row>
            {renderDataStudent()}
            <Row>
              <h2>List of Subjects</h2>
            </Row>
            {renderSubject()}
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

const studentPropstoMap = (state) => {
  return {
    studentListProps: state.stateStudentList.filteredStudents.length > 0
      ? state.stateStudentList.filteredStudents
      : state.stateStudentList.students,
    subjectProps: state.stateStudentList.subjects,
    filteredSubjects: state.stateStudentList.filteredSubjects || [],
    studentDetailsProps: state.stateStudentList.studentDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createSubjectss: (subject) => {
      let addSubject = {
        id: subject.subjectId,
        subjectId: subject.subjectId,
        name: subject.name,
      };
      dispatch({
        type: "CREATE_SUBJECT",
        payload: addSubject,
      });
    },

    searchStudent: (searchTerm) => {
      dispatch({
        type: "SEARCH_STUDENT",
        payload: searchTerm,
      });
    },

    filterSubject: (filter) => {
      dispatch({
        type: "FILTER_SUBJECT",
        payload: filter,
      });
    },

    filterSubjectName: (subjectName) => {
      dispatch({
        type: "FILTER_SUBJECTNAME",
        payload: subjectName,
      });
    },
  };
};

export default connect(studentPropstoMap, mapDispatchToProps)(StudentList);

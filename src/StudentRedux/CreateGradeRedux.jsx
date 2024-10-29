import React, { Fragment, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";

function CreateGradeRedux({
  evaluationsProps,
  subjectProps,
  studentProps,
  createSubjectss,
  addEvaluation
}) {
  const { id } = useParams();
  const [newSubject, setNewSubject] = useState({ subjectId: "", name: "" });
  const [newGrade, setNewGrade] = useState("");
  const [newExplanation, setNewExplanation] = useState("");

  const renderDataSubject = () => {
    return (
      <ul style={{ marginLeft: "10%" }}>
        <li>
          <Link to="#" onClick={() => {}}>
            All Subjects
          </Link>
        </li>
        {subjectProps.map((item, index) => (
          <li key={index}>
            <Link to="#" onClick={() => {}}>
              {item?.name}
            </Link>
          </li>
        ))}
      </ul>
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

  const addGradesStudent = () => {
    return (
      <Form className="mt-5" style={{ marginBottom: "3%" }}>
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
            <Button
              variant="primary"
              onClick={() =>
                addEvaluation({
                  studentId: id,
                  grade: newGrade,
                  additionalExplanation: newExplanation,
                })
              }
            >
              Add new
            </Button>
          </Col>
        </Row>
      </Form>
    );
  };

  const renderGradesStudent = () => {
    const studentEvaluations = evaluationsProps.filter(
      (item) => item.studentId === id
    );

    console.log(studentEvaluations)

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Grade</th>
            <th>Explanation</th>
          </tr>
        </thead>
        <tbody>
          {evaluationsProps.map((item, index) => (
            <tr key={index}>
              <td>{item?.grade}</td>
              <td>{item?.additionalExplanation}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  return (
    <Fragment>
      <h1 style={{ textAlign: "center" }}>Student Management</h1>
      <Container fluid style={{ width: "95%" }}>
        <Row>
          <Col md={3}>
            <Row>
              <h2>Subjects</h2>
            </Row>
            {renderDataSubject()}
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
            {addGradesStudent()}
            {renderGradesStudent()}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    evaluationsProps: state.stateStudentList.evaluations,
    subjectProps: state.stateStudentList.subjects,
    studentProps: state.stateStudentList.students,
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

    addEvaluation: (grade) => {
      let newEvaluation = {
        studentId: grade.studentId,
        grade: parseFloat(grade.grade),
        additionalExplanation: grade.additionalExplanation,
      };
      dispatch({
        type: "ADD_EVALUATION",
        payload: newEvaluation,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateGradeRedux);

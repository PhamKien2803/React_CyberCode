import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

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
  }
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

  const filterStudents = () => {
    return students.filter((stu) => {
      if (selectedSubject) {
        return studentSubjects.find((studentSubjects) => studentSubjects?.subjectId === stu?.studentId && studentSubjects?.subjectId === selectedSubject);
      }
      return true;
    }).filter((student) => {
      return (
        searchQuery === "" || student?.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })
  }

  const renderSubjects = () => {
    return (
      <ul style={{ marginLeft: "10%" }}>
        <li>
          <Link to={"#"} onClick={() => setSelectedSubject("")}>
            All Subjects
          </Link>
        </li>
        {subjects.map((item, index) => (
          <li key={index}>
            <Link to={"#"} onClick={() => setSelectedSubject("")}>
              {item?.name}
            </Link>
          </li>
        ))}
      </ul>
    )
  }

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
      <h1 className="text-center">Student Managements</h1>
      <div className="justify-content-center d-flex mb-3">
        <input className="w-70 p-5 fs-16" type="text" placeholder="Enter student name to search..." value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)}></input>
      </div>
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
              <h2>List of Students</h2>
            </div>
            {renderStudentInformation()}
          </div>
          <hr className="gray-400 w-100 border-solid" />
          <div className="row">
            <h5 className="text-center">Copyright by: HE17xxxx</h5>
          </div>
          <hr className="gray-400 w-100 border-solid" />
        </div>
      </div>
    </div>
  )
}

export default StudentList

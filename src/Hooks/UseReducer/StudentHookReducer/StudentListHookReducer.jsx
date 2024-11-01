import React, { useReducer } from "react";
const initialStudentList = [];


const studentListReducer = (state, action) => {
  switch(action.type){

    default:
      return state
  }
}


const arrayStudent = {
  students: [
    {
      id: "1",
      studentId: "HE1710001",
      name: "Phạm Hoàng Minh",
      age: 20,
      isRegularStudent: true,
    },
    {
      id: "2",
      studentId: "HE1710002",
      name: "Ngô Thị Hồng",
      age: 19,
      isRegularStudent: false,
    },
    {
      id: "3",
      studentId: "HE1710003",
      name: "Trần Hải Nam",
      age: 21,
      isRegularStudent: true,
    },
    {
      id: "4",
      studentId: "HE1710004",
      name: "Trần Thu Hường",
      age: 20,
      isRegularStudent: false,
    },
  ],
  studentDetails: [
    {
      id: "1",
      studentId: "HE1710001",
      address: {
        street: "190 Nguyễn Tuân, Thanh Xuân",
        city: "Hà Nội",
      },
    },
    {
      id: "2",
      studentId: "HE1710002",
      address: {
        street: "Liên Minh, Vụ Bản",
        city: "Nam Định",
      },
    },
    {
      id: "3",
      studentId: "HE1710003",
      address: {
        street: "56 Trung Hòa, Cầu Giấy",
        city: "Hà Nội",
      },
    },
    {
      id: "4",
      studentId: "HE1710004",
      address: {
        street: "56 Quang Trung, Phủ Lý",
        city: "Hà Nam",
      },
    },
  ],
  evaluations: [
    {
      id: "1",
      studentId: "HE1710001",
      grade: 7.5,
      additionalExplanation: "PRF192 course",
    },
    {
      id: "2",
      studentId: "HE1710001",
      grade: 7,
      additionalExplanation: "PRO192 course",
    },
    {
      id: "3",
      studentId: "HE1710001",
      grade: 7.5,
      additionalExplanation: "DBI202 course",
    },
    {
      id: "4",
      studentId: "HE1710002",
      grade: 8,
      additionalExplanation: "PRF192 course",
    },
    {
      id: "5",
      studentId: "HE1710002",
      grade: 9,
      additionalExplanation: "PRO192 course",
    },
    {
      id: "23",
      studentId: "HE1710003",
      grade: 5,
      additionalExplanation: "PRK",
    },
    {
      id: "bf35",
      studentId: "HE1710003",
      grade: 3,
      additionalExplanation: "s",
    },
    {
      id: "63ce",
      studentId: "HE1710004",
      grade: 4,
      additionalExplanation: "PT2",
    },
  ],
  subjects: [
    {
      id: "1",
      subjectId: "PRF192",
      name: "Programming Fundamental",
    },
    {
      id: "2",
      subjectId: "PRO192",
      name: "Programming Object Oriented",
    },
    {
      id: "3",
      subjectId: "DBI202",
      name: "Database Introduction",
    },
    {
      id: "4",
      subjectId: "OSG202",
      name: "Operating System",
    },
    {
      id: "5",
      subjectId: "PRJ301",
      name: "Programming Java Web",
    },
    {
      id: "23",
      subjectId: "23",
      name: "FrontEnd with React",
    },
    {
      id: "45",
      subjectId: "45",
      name: "OOP with Java Lab",
    },
    {
      id: "233",
      subjectId: "233",
      name: "Java",
    },
    {
      id: "11",
      subjectId: "11",
      name: "NodeJS,ExpressJS,MongoDB",
    },
    {
      id: "66",
      subjectId: "66",
      name: "CSI",
    },
    {
      id: "88",
      subjectId: "88",
      name: "CEA",
    },
    {
      id: "90",
      subjectId: "90",
      name: "SDN",
    },
  ],
  studentsSubjects: [
    {
      id: "1",
      studentId: "HE1710001",
      subjectId: "PRF192",
    },
    {
      id: "2",
      studentId: "HE1710001",
      subjectId: "DBI202",
    },
    {
      id: "4",
      studentId: "HE1710002",
      subjectId: "PRF192",
    },
    {
      id: "5",
      studentId: "HE1710002",
      subjectId: "PRJ301",
    },
    {
      id: "2",
      studentId: "HE1710003",
      subjectId: "PRO192",
    },
    {
      id: "6",
      studentId: "HE1710004",
      subjectId: "PRJ301",
    },
  ],
  filteredStudents: [],
  currentFilter: "all",
};

export default function StudentListHookReducer() {
  const [student, dispatch] = useReducer(studentListReducer, initialStudentList);
  
  return <div></div>;
}

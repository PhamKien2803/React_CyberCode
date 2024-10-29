const initialState = {
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

const studentListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_SUBJECT":
      // Thêm một môn học mới vào danh sách các môn học
      // Trả về một state mới với danh sách môn học được cập nhật
      return {
        ...state,
        subjects: [...state.subjects, action.payload],
      };

    case "SEARCH_STUDENT":
      // Tìm kiếm sinh viên dựa trên tên
      // Chuyển đổi chuỗi tìm kiếm thành chữ thường
      const searchTerm = action.payload.toLowerCase();
      // Lọc danh sách sinh viên, chỉ giữ lại những sinh viên có tên chứa chuỗi tìm kiếm
      const filteredStudents = state.students.filter((student) =>
        student.name.toLowerCase().includes(searchTerm)
      );
      // Trả về state mới với danh sách sinh viên đã được lọc
      return {
        ...state,
        filteredStudents,
      };

    case "FILTER_SUBJECT":
      // Lọc sinh viên theo môn học
      const filter = action.payload;
      let filteredStudentsBySubject = state.students;

      if (filter !== "all") {
        // Nếu không phải lọc tất cả, tìm các sinh viên học môn học được chọn
        const studentsInSubject = state.studentsSubjects
          .filter((studentSubject) => studentSubject.subjectId === filter)
          .map((student) => student.studentId);

        // Lọc danh sách sinh viên, chỉ giữ lại những sinh viên học môn học được chọn
        filteredStudentsBySubject = state.students.filter((student) =>
          studentsInSubject.includes(student.studentId)
        );
      }

      // Trả về state mới với danh sách sinh viên đã được lọc và bộ lọc hiện tại
      return {
        ...state,
        filteredStudents: filteredStudentsBySubject,
        currentFilter: filter,
      };

    case "FILTER_SUBJECTNAME":
      // Lọc môn học theo tên
      const subjectName = action.payload;
      let filterSubject = state.subjects;

      if (subjectName !== "all") {
        // Nếu không phải lọc tất cả, lọc các môn học có tên chứa chuỗi tìm kiếm
        filterSubject = state.subjects.filter((subject) =>
          subject.name.toLowerCase().includes(subjectName.toLowerCase())
        );
      }

      // Trả về state mới với danh sách môn học đã được lọc
      return { ...state, filterSubject };

    case "ADD_EVALUATION":
      // Thêm một đánh giá mới vào danh sách đánh giá
      // Trả về state mới với danh sách đánh giá được cập nhật
      return {
        ...state,
        evaluations: [...state.evaluations, action.payload],
      };

    default:
      // Nếu action không khớp với bất kỳ case nào, trả về state hiện tại
      return { ...state };
  }
};

export default studentListReducer;
